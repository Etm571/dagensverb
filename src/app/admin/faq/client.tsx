"use client";

import { useEffect, useState } from "react";


export default function FAQAdminPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  
  

  useEffect(() => {
    fetch("/api/admin/faq")
      .then((res) => res.json())
      .then(setFaqs);
  }, []);

  const createFAQ = async () => {
    const res = await fetch("/api/admin/faq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    });

    if (res.ok) {
      const newFAQ = await res.json();
      setFaqs((prev) => [newFAQ, ...prev]);
      setQuestion("");
      setAnswer("");
      setError("");
    } else if (res.status === 409) {
      setError("En FAQ med denna fråga finns redan.");
    } else if (res.status === 400) {
      setError("Både fråga och svar krävs.");
    } else {
      setError("Något gick fel vid skapandet av FAQ.");
    }
  };

  const deleteFAQ = async (id: number) => {
    const res = await fetch(`/api/admin/faq/${id}`, { method: "DELETE" });
    if (res.ok) {
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    }
  };

  const sortedFaqs = [...faqs].sort((a, b) =>
    a.question.localeCompare(b.question)
  );

  return (
    
    <div className="bg-blue-500 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-white text-center">FAQs</h1>

        {error && <div className="text-red-600 text-center">{error}</div>}

        <div className="space-y-4">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Fråga"
            className="border border-blue-300 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Svar"
            className="border border-blue-300 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={createFAQ}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
          >
            Skapa FAQ
          </button>
        </div>

        <ul>
          {sortedFaqs.length === 0 ? (
            <li className="text-gray-400 text-center">
              Inga FAQs tillgängliga
            </li>
          ) : (
            sortedFaqs.map((faq) => (
              <li
                key={faq.id}
                className="border border-blue-300 p-4 my-3 rounded-xl bg-white/20 flex justify-between items-start space-x-4"
              >
                <div>
                  <strong className="text-lg text-white">{faq.question}</strong>
                  <p className="text-white mt-2">{faq.answer}</p>
                </div>
                <button
                  onClick={() => deleteFAQ(faq.id)}
                  className="text-red-600 hover:text-red-700 transition duration-200"
                >
                  Ta bort
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
