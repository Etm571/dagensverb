import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();


export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {

  const id = Number((await props.params).id);

  try {
    await prisma.verbRequest.delete({ where: { id } });
    return NextResponse.json({ message: "FAQ removed" });
  } catch {
    return NextResponse.json({ error: "Could not remove FAQ." }, { status: 500 });
  }
}