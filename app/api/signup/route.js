import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function POST(req) {
  try {
    if (!uri) {
      console.error("MONGODB_URI is not set");
      return NextResponse.json(
        { error: "Server misconfiguration: MONGODB_URI not set" },
        { status: 500 }
      );
    }
    const { email, password, name, role } = await req.json();
    if (!email || !password || !name || !role) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (role !== "buyer" && role !== "seller") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db("estature");
      const exists = await db.collection("users").findOne({ email });
      if (exists) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
      }
      await db.collection("users").insertOne({ email, password, name, role });
      return NextResponse.json({ email, name, role });
    } finally {
      await client.close();
    }
  } catch (err) {
    console.error("Signup API error:", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
