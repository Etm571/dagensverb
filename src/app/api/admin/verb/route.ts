import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { auth } from '@/../auth.config';
import { stat } from 'fs';

const prisma = new PrismaClient();

export async function GET() {
    const session = await auth();
    
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const oldVerbs = await prisma.verbToday.findMany({
        orderBy: {
            date: 'desc',
        },
    });

    const upcomingVerbs = await prisma.verbRequest.findMany({
        orderBy: {
            date: 'asc',
        },
    });

    const formattedOldVerbs = oldVerbs.map((verb) => ({
        id: verb.id,
        name: verb.name,
        date: verb.date.toISOString().split('T')[0],
    }));

    const formattedUpcomingVerbs = upcomingVerbs.map((verb) => ({
        id: verb.id,
        name: verb.name,
        date: verb.date.toISOString().split('T')[0],
    }));

    return NextResponse.json({
        oldVerbs: formattedOldVerbs,
        upcomingVerbs: formattedUpcomingVerbs,
        status: 200,
    });
}
