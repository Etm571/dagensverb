"use client";

import { useEffect, useState } from "react";

export default function FAQAdminPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetch("/api/faq/admin")
      .then((res) => res.json())
      .then(setFaqs);
  }, []);

  const createFAQ = async () => {
    const res = await fetch("/api/faq/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    });

    if (res.ok) {
      const newFAQ = await res.json();
      setFaqs((prev) => [newFAQ, ...prev]);
      setQuestion("");
      setAnswer("");
    }
  };

  const deleteFAQ = async (id: number) => {
    const res = await fetch(`/api/faq/admin/${id}`, { method: "DELETE" });
    if (res.ok) {
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">FAQs</h1>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Fråga"
        className="border p-2 w-full"
      />
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Svar"
        className="border p-2 w-full"
      />
      <button onClick={createFAQ} className="bg-blue-600 text-white px-4 py-2 rounded">
        Skapa FAQ
      </button>

      <ul>
        {faqs.length === 0 ? (
          <li className="text-gray-500">Inga FAQs tillgängliga</li>
        ) : (
          faqs.map((faq) => (
            <li key={faq.id} className="border p-2 my-2 flex justify-between">
              <div>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </div>
              <button onClick={() => deleteFAQ(faq.id)} className="text-red-600">
                Ta bort
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
