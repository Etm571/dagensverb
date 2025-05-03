import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const faqs = await prisma.fAQ.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(faqs);
}

export async function POST(req: Request) {
  const { question, answer } = await req.json();

  try {
    const newFAQ = await prisma.fAQ.create({ data: { question, answer } });
    return NextResponse.json(newFAQ, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Kunde inte skapa FAQ." }, { status: 500 });
  }
}
