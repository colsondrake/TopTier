import connectMongoDB from "../../../../config/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; // Use env var in prod

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  await connectMongoDB();

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return NextResponse.json({ message: "Username already taken" }, { status: 400 });
  }

  const newUser = await User.create({ username, password });

  const token = jwt.sign(
    { userId: newUser._id, username: newUser.username },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return NextResponse.json(
    { message: "User registered successfully", token },
    { status: 201 }
  );
}
