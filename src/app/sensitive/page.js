import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // ⛔️ Redirect if not authenticated
  }

  return (
    <div>
      <h1>Sensitive information</h1>
      <p>Hello, {session.user.name}</p>
    </div>
  );
}
