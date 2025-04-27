import { NextResponse, NextRequest } from 'next/server';
import { getRandomVerb } from '../../../lib/getNewVerb';
import cron from 'node-cron';



let verb = await getRandomVerb();

let verbJSON = {
  verb: verb,
}


cron.schedule('52 18 * * *', async () => {
  try {
    verb = await getRandomVerb();
    verbJSON = {
      verb: verb,
    }

  } catch (error) {
    console.error('Error fetching random verb at midnight:', error);
  }
});

export async function GET(request: NextRequest) {
  try {
    console.log(verbJSON)
    return NextResponse.json(verbJSON, { status: 200 });
  } catch (error) {
    console.error('Error reading verbs.json:', error);
    return NextResponse.json({ error: 'Failed to load verbs' }, { status: 500 });
  }
}
