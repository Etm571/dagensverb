import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  // No need to await params directly, but destructure it from the parameter
  const id = Number(params.id);

  try {
    await prisma.fAQ.delete({ where: { id } });
    return NextResponse.json({ message: "FAQ borttagen" });
  } catch {
    return NextResponse.json({ error: "Kunde inte ta bort FAQ." }, { status: 500 });
  }
}