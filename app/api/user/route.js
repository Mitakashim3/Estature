import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Create a new user
export async function POST(req) {
  const { email, password, name, role } = await req.json();
  if (!email || !password || !name || !role) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const client = await clientPromise;
  const db = client.db("estature");
  const exists = await db.collection("users").findOne({ email });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  await db.collection("users").insertOne({ email, password, name, role });
  return NextResponse.json({ email, name, role });
}

// Get all users (for admin/testing)
export async function GET() {
  const client = await clientPromise;
  const db = client.db("estature");
  const users = await db.collection("users").find({}).toArray();
  return NextResponse.json(users);
}
