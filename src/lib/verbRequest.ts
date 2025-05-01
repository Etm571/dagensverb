import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()


async function verbRequest(request:string) {

    if (!request) {
        return new Error('Request is required');
    }

    await prisma.verbRequest.create({
        data: {
            name: request,
            date: new Date(),
        }
    });
    return 201;
}

export default verbRequest;