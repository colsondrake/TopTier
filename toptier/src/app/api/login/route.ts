// /api/users/login/route.ts
import connectMongoDB from "../../../../config/mongodb";
import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; 

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  await connectMongoDB();

  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
  }

  // Create JWT
  const token = jwt.sign(
    { userId: user._id, username: user.username },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ token }, { status: 200 });
}
