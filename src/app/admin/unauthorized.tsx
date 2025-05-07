export default async function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <h1 className="text-2xl font-bold">Unauthorized</h1>
      <p className="mt-4">You must be logged in to view this page.</p>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        <a href="/login">Sign in</a>
      </button>
    </div>
  );
}
