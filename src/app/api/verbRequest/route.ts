import { NextResponse, NextRequest } from 'next/server';
import verbRequest from '@/lib/verbRequest';



export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body.request) {
            return NextResponse.json({ error: 'Request is required' }, { status: 204 });
        }

        return await verbRequest(body.request);

        
    } catch (error) {
        return NextResponse.json({ error: 'Failed to process request' }, { status: 400 });
    }
}