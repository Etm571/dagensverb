import { getServerSession } from 'next-auth';
import { authOptions } from "@/../auth.config";
import ClientHome from './client';
import Unauthorized from '../unauthorized';

export const metadata = {
    title: 'Dagens Verb - Verb',
  };

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Unauthorized />
  }

  return <ClientHome />;
}
