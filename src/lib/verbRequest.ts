import { PrismaClient } from '../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()


async function verbRequest(request:string) {

    await prisma.verbRequest.create({
        data: {
            name: request,
            date: new Date(),
        }
    });
    return NextResponse.json(
        { message: 'Request processed successfully' },
        { status: 201 }
      );
    }

export default verbRequest;