"use client";

import Link from "next/link";

export default function AdminMainPage() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Adminpanel</h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/admin/faq"
            className="block bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700"
          >
            Hantera FAQ
          </Link>
        </li>
        {/* Här kan du lägga till fler länkar till andra adminsidor */}
      </ul>
    </div>
  );
}
