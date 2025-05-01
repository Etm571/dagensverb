'use client';

import { useEffect, useState } from 'react';
import { fetchVerb } from '../utils/fetchVerb';
import VerbRequestField from './components/verbRequest';
import Image from 'next/image';

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
    <main className="flex flex-col h-screen bg-blue-400 px-4 py-10">
      <div className="flex justify-end mr-5">
        <div
          className="cursor-pointer"
          onClick={() => window.open('https://github.com/Etm571/dagensverb', '_blank')}
        >
          <Image
            src="/github-white.png"
            alt="GitHub Logo"
            width={35}
            height={35}
          />
        </div>

      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="text-8xl">
          {verb}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <VerbRequestField />
      </div>
    </main>

  );
}
