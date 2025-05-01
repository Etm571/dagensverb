import { NextResponse, NextRequest } from 'next/server';
import verbRequest from '@/lib/verbRequest';



export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        verbRequest(body.request);

        return NextResponse.json({ message: 'Request processed successfully', data: body });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to process request' }, { status: 400 });
    }
}