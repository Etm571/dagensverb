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

export async function POST(req: Request) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { name } = body;

    if (!name) {
        return NextResponse.json({ error: 'Missing verb name' }, { status: 400 });
    }

    const latestVerb = await prisma.verbRequest.findFirst({
        orderBy: {
            sortOrder: 'desc',
        },
    });

    const newSortOrder = latestVerb ? latestVerb.sortOrder - 1 : -1;

    const newVerb = await prisma.verbRequest.create({
        data: {
            name,
            sortOrder: newSortOrder,
            date: new Date(),
        },
    });

    return NextResponse.json({ message: 'Verb added at the top', verb: newVerb }, { status: 201 });
}
