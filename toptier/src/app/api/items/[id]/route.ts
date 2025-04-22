import connectMongoDB from "../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { verifyToken } from "@/lib/verifyToken";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

// RouteParams interface
interface RouteParams {
    params: { id: string };
}

// GET function to return item by id
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    await connectMongoDB();
    const item = await Item.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
}

// PUT function to update items
export async function PUT(request: NextRequest, context: { params: { id: string } }) {
    const { id } = context.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

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
  
    const item = await Item.findById(id);

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }
  
    if (item.userIdentification.toString() !== userId) {
      return NextResponse.json({ message: "Forbidden: You don't own this item" }, { status: 403 });
    }
  
    item.game = game;
    item.winCount = winCount;
    await item.save();
  
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
  }
  

// DELETE function to delete items
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
      const { id } = params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
      }
  
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
  
      await connectMongoDB();
      const item = await Item.findById(id);
  
      if (!item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }
  
      if (item.userIdentification.toString() !== userId) {
        return NextResponse.json({ message: "Forbidden: You don't own this item" }, { status: 403 });
      }
  
      await item.deleteOne();
  
      return NextResponse.json({ message: "Item deleted" }, { status: 200 });
  
    } catch (error: any) {
      console.error("DELETE error:", error.message);
      return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
  }