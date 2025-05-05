import { PrismaClient } from '../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()


async function verbRequest(request:string) {

    const existingRequest = await prisma.verbRequest.findFirst({
        where: {
            name: request,
        },
    });
    if (existingRequest) {

        return NextResponse.json(
            { message: 'Verb already exists', accepted: false },
            { status: 409 }
          );
          
    }
    else {

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
}

export default verbRequest;