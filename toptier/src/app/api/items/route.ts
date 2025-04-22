import connectMongoDB from "../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/verifyToken";

export async function GET() {
  await connectMongoDB();
  const items = await Item.find();
  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Missing token" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
    }

    const { userId } = decoded as { userId: string };

    const { game, winCount } = await request.json();
    await connectMongoDB();

    await Item.create({ userIdentification: userId, game, winCount });

    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/items error:", error.message);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
