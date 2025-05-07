'use client'

import { useEffect, useState } from 'react'

type Verb = {
  id: number
  name: string
  date: string
}

type VerbResponse = {
  oldVerbs: Verb[]
  upcomingVerbs: Verb[]
}

export default function VerbList() {
  const [oldVerbs, setOldVerbs] = useState<Verb[]>([])
  const [upcomingVerbs, setUpcomingVerbs] = useState<Verb[]>([])

  useEffect(() => {
    const fetchVerbs = async () => {
      const response = await fetch('/api/admin/verb')
      const data: VerbResponse = await response.json()
      setOldVerbs(data.oldVerbs)
      setUpcomingVerbs(data.upcomingVerbs)
    }

    fetchVerbs()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-10 px-4 text-white">
      <div className="max-w-3xl mx-auto grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">Gamla verb</h2>
          <ul className="bg-white/10 rounded-lg p-4 space-y-2">
            {oldVerbs.map((verb) => (
              <li key={verb.id} className="bg-white/20 p-2 rounded shadow-sm">
                <div className="font-semibold">{verb.name}</div>
                <div className="text-sm opacity-80">Visades: {verb.date}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">Kommande verb</h2>
          <ul className="bg-white/10 rounded-lg p-4 space-y-2">
            {upcomingVerbs.map((verb) => (
              <li key={verb.id} className="bg-white/20 p-2 rounded shadow-sm">
                <div className="font-semibold">{verb.name}</div>
                <div className="text-sm opacity-80">Tillagd: {verb.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
