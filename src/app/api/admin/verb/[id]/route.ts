import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/../auth.config";


const prisma = new PrismaClient();


export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = Number((await props.params).id);

  try {
    await prisma.verbRequest.delete({ where: { id } });
    return NextResponse.json({ message: "FAQ removed" });
  } catch {
    return NextResponse.json({ error: "Could not remove FAQ." }, { status: 500 });
  }
}