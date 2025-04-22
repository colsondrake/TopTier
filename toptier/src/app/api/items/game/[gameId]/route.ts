import connectMongoDB from "../../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";

export async function GET(_: Request, contextPromise: Promise<{ params: { gameId: string } }>) {
  const { params } = await contextPromise;
  const { gameId } = params;

  await connectMongoDB();
  const items = await Item.find({ game: gameId });

  return NextResponse.json({ items }, { status: 200 });
}
