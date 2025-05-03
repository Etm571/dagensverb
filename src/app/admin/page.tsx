import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth.config"; // Anpassa om sökvägen till authOptions är annorlunda

export const metadata = {
  title: "Adminpanel",
};

export default async function AdminMainPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl">Please sign in.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Adminpanel</h1>
      <ul className="space-y-4">
        <li>
          <a
            href="/admin/faq"
            className="block bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700"
          >
            Hantera FAQ
          </a>
        </li>
      </ul>
    </div>
  );
}
