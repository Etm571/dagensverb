import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth.config";
import Unauthorized from "./unauthorized";

export const metadata = {
  title: "Dagens Verb - Admin",
};

export default async function AdminMainPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Unauthorized />;
  }

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl w-full max-w-2xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-white text-center">
          Dagens verb – Adminpanel
        </h1>
        <ul className="space-y-4">
          <li>
            <a
              href="/admin/faq"
              className="block bg-white text-blue-600 text-lg font-semibold px-6 py-4 rounded-xl shadow hover:bg-blue-100 transition duration-200"
            >
              Hantera FAQ
            </a>
          </li>
          <li>
            <a
              href="/admin/verbs"
              className="block bg-white text-blue-600 text-lg font-semibold px-6 py-4 rounded-xl shadow hover:bg-blue-100 transition duration-200"
            >
              Hantera verb
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
