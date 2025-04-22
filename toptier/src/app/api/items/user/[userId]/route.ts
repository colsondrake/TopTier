import connectMongoDB from "../../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";

interface RouteParams {
  params: { userId: string };
}

export async function GET(_: Request, context: { params: { userId: string } }) {
  const { userId } = context.params; 
  await connectMongoDB();

  const items = await Item.find({ userIdentification: userId });

  return NextResponse.json({ items }, { status: 200 });
}