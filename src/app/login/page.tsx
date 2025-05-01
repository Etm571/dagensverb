import LoginForm from "../components/loginForm"

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow">
      <h1 className="text-xl mb-4">Logga in</h1>
      <LoginForm />
    </div>
  )
}
