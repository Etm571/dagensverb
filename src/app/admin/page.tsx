import { auth } from "../../../auth.config"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const session = await auth()
  if (!session) redirect("/login")

  return (
    <div>
      <h1>Adminpanel</h1>
      <p>Välkommen {session.user?.name}</p>
    </div>
  )
}
