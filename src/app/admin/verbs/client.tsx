"use client";

import { useEffect, useState } from "react";

type Verb = {
  id: number;
  name: string;
  date: string;
};

type VerbResponse = {
  oldVerbs: Verb[];
  upcomingVerbs: Verb[];
};

export default function VerbList() {
  const [oldVerbs, setOldVerbs] = useState<Verb[]>([]);
  const [upcomingVerbs, setUpcomingVerbs] = useState<Verb[]>([]);
  const [newVerbName, setNewVerbName] = useState("");

  const fetchVerbs = async () => {
    try {
      const response = await fetch("/api/admin/verb", { credentials: "include" });
      const data: VerbResponse = await response.json();
      console.log(data);
      setOldVerbs(data.oldVerbs);
      setUpcomingVerbs(data.upcomingVerbs);
    } catch (error) {
      console.error("Error fetching verbs:", error);
    }
  };

  useEffect(() => {
    fetchVerbs();
  }, []);

  const deleteVerb = async (id: number) => {
    const res = await fetch(`/api/admin/verb/${id}`, { 
      method: "DELETE",
      credentials: "include"
    });
    if (res.ok) {
      setUpcomingVerbs((prev) => prev.filter((verb) => verb.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVerbName.trim()) return;

    try {
      const response = await fetch("/api/admin/verb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name: newVerbName }),
      });

      if (response.ok) {
        setNewVerbName("");
        await fetchVerbs();
      } else {
        console.error("Failed to add verb");
      }
    } catch (error) {
      console.error("Error adding verb:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 py-10 px-4 text-white">
      <div className="max-w-3xl mx-auto grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">
            Gamla verb
          </h2>
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
          <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">
            Kommande verb
          </h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newVerbName}
                onChange={(e) => setNewVerbName(e.target.value)}
                placeholder="Nytt verb..."
                className="flex-1 p-2 rounded bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-medium transition-colors"
              >
                Lägg till
              </button>
            </div>
          </form>
          <ul className="bg-white/10 rounded-lg p-4 space-y-2">
            {upcomingVerbs.map((verb) => (
              <li
                key={verb.id}
                className="bg-white/20 p-2 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <div className="font-semibold">{verb.name}</div>
                  <div className="text-sm opacity-80">Tillagd: {verb.date}</div>
                </div>
                <button
                  onClick={() => deleteVerb(verb.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}