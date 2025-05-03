import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "../../../../../auth.config";

const prisma = new PrismaClient();

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });    
  }

  const faqs = await prisma.fAQ.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(faqs);

}

export async function POST(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { question, answer } = await req.json();

  try {
    const newFAQ = await prisma.fAQ.create({ data: { question, answer } });
    return NextResponse.json(newFAQ, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Could not create FAQ." },
      { status: 500 }
    );
  }
}
