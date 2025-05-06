import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    const faqs = await prisma.fAQ.findMany({
      where: {
        question: {
          equals: query,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const dagensVerb = await prisma.verbToday.findFirst({
      where: {
        name: query,
      },
      orderBy: {
        date: "desc",
      },
    });
    
    if (query === dagensVerb?.name) {
      return NextResponse.json(
        { message: "Japp, det är dagens verb!", accepted: false },
        { status: 200 }
      );
    }

    if (faqs.length === 0) {
      const existingRequest = await prisma.verbRequest.findFirst({
        where: {
          name: query,
        },
      });
      if (existingRequest) {
        return NextResponse.json(
          { message: "Verbet finns redan i kön!", accepted: false },
          { status: 200 }
        );
      }

      return NextResponse.json({ status: 200, accepted: true });
    }

    const answer = faqs[0].answer;
    return NextResponse.json(
      { message: answer, accepted: false },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error searching FAQs:", error);
    return NextResponse.json(
      { error: "Failed to search FAQs" },
      { status: 500 }
    );
  }
}
