import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function POST(req) {
  const { email, password, name } = await req.json();
  if (!email || !password || !name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("estature");
    const exists = await db.collection("users").findOne({ email });
    if (exists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
    await db.collection("users").insertOne({ email, password, name });
    return NextResponse.json({ email, name });
  } finally {
    await client.close();
  }
}
