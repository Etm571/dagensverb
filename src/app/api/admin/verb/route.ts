import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { auth } from '@/../auth.config';

const prisma = new PrismaClient();

export async function GET() {
    const session = await auth();
    
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const verbs = await prisma.verbToday.findMany({
        orderBy: {
        date: 'desc',
        },
    });
    
    return NextResponse.json(verbs);
}