import {fetchVerb} from '../utils/fetchVerb';
const verb = fetchVerb();

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-blue-400">
      <div className="text-8xl mb-90">
        {verb}
      </div>
    </main>
  )
}
