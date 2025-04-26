import {fetchVerb} from '../utils/fetchVerb';

export default function Home() {
  const verb = fetchVerb();
  return (
    <main className="flex items-center justify-center h-screen bg-blue-400">
      <div className="text-8xl mb-90">
        {verb}
      </div>
    </main>
  )
}
