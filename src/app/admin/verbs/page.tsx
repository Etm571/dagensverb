'use client'

import { useEffect, useState } from 'react'

type Verb = {
  id: number
  name: string
  date: string
}

export default function VerbList() {
  const [verbs, setVerbs] = useState<Verb[]>([])

  useEffect(() => {
    const fetchVerbs = async () => {
      const response = await fetch('/api/admin/verb')
      const data = await response.json()
      setVerbs(data)
    }

    fetchVerbs()
  }, [])

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center px-4">

    <ul className="bg-blue-500 p-4 text-white rounded-lg h-full">
      {verbs.map((verb) => (
        <li key={verb.id} className="py-1 border-b border-blue-300 last:border-none">
          {verb.name}
        </li>
      ))}
    </ul>
    </div>
  )
}
