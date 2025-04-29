'use client';

import { useEffect, useState } from 'react';
import { fetchVerb } from '../utils/fetchVerb';

export default function ClientHome() {
  const [verb, setVerb] = useState('');

  useEffect(() => {
    const getVerb = async () => {
      const fetchedVerb = await fetchVerb();
      setVerb(fetchedVerb);
    };

    getVerb();
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-blue-400">
      <div className="text-8xl mb-90">
        {verb}
      </div>
    </main>
  );
}
