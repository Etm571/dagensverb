import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const oldVerbs = await prisma.verbToday.findMany({
    orderBy: {
      date: "desc",
    },
  });

  const upcomingVerbs = await prisma.verbRequest.findMany({
    orderBy: [{ priority: "desc" }, { sortOrder: "asc" }, { date: "asc" }],

  });

  const formattedOldVerbs = oldVerbs.map((verb) => ({
    id: verb.id,
    name: verb.name,
    priority: verb.priority,
    date: verb.date.toISOString().split("T")[0],
  }));

  const formattedUpcomingVerbs = upcomingVerbs.map((verb) => ({
    id: verb.id,
    name: verb.name,
    priority: verb.priority,
    date: verb.date.toISOString().split("T")[0],
  }));

  return NextResponse.json({
    oldVerbs: formattedOldVerbs,
    upcomingVerbs: formattedUpcomingVerbs,
    status: 200,
  });
}

export async function POST(req: Request) {


  const body = await req.json();
  const { name } = body;

  if (!name) {
    return NextResponse.json({ error: "Missing verb name" }, { status: 400 });
  }

  const latestVerb = await prisma.verbRequest.findFirst({
    orderBy: [{ priority: "desc" }, { sortOrder: "asc" }],
  });

  const newSortOrder = latestVerb ? latestVerb.sortOrder - 1 : -1;

  const newVerb = await prisma.verbRequest.create({
    data: {
      name,
      sortOrder: newSortOrder,
      priority: true,
      date: new Date(),
    },
  });

  return NextResponse.json(
    { message: "Verb created", verb: newVerb },
    { status: 201 }
  );
}
