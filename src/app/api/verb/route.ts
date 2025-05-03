import { NextResponse, NextRequest } from 'next/server';
import { getRandomVerb } from '@/lib/getNewVerb';

export async function GET(request: NextRequest) {
  try {
    const verb = await getRandomVerb();
    return NextResponse.json({ verb }, { status: 200 });
  } catch (error) {
    console.error('Error reading verbs.json:', error);
    return NextResponse.json({ error: 'Failed to load verbs' }, { status: 500 });
  }
}
