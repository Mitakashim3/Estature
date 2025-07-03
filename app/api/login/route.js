import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("estature");
    const user = await db.collection("users").findOne({ email, password });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    return NextResponse.json({ email: user.email, name: user.name });
  } finally {
    await client.close();
  }
}
