import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';
import { getRandomVerb } from '../../../lib/getNewVerb';
import cron from 'node-cron';

var verb: Object;
verb = getRandomVerb();


cron.schedule('0 0 * * *', async () => {
  try {
    verb = getRandomVerb();
    console.log('Random verb fetched:', verb);

} catch (error) {
    console.error('Error fetching random verb at midnight:', error);
  }
});

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(verb);
  } catch (error) {
    console.error('Error reading verbs.json:', error);
    return NextResponse.json({ error: 'Failed to load verbs' }, { status: 500 });
  }
}
