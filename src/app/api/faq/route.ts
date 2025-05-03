import { NextResponse } from 'next/server';
import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    const faqs = await prisma.fAQ.findMany({
      where: {
        question: {
          equals: query,
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (faqs.length === 0) {
      return NextResponse.json({ status: 200, accepted: "true" });
    }

    const answer = faqs[0].answer;


    return NextResponse.json({ message: answer, status: 200, accepted: "false" });
  } catch (error) {
    console.error('Error searching FAQs:', error);
    return NextResponse.json(
      { error: 'Failed to search FAQs' },
      { status: 500 }
    );
  }
}
