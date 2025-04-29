import { NextResponse, NextRequest } from 'next/server';
import { getRandomVerb } from '../../../lib/getNewVerb';



let verb = await getRandomVerb();

let verbJSON = {
  verb: verb,
}
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(verbJSON, { status: 200 });
  } catch (error) {
    console.error('Error reading verbs.json:', error);
    return NextResponse.json({ error: 'Failed to load verbs' }, { status: 500 });
  }
}
