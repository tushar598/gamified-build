import { auth } from "@/auth";
import { LoginForm } from "@/components/login-form";
import DashboardPage from "../dashboard/page";
import { redirect } from "next/navigation"; // ✅ Correct import

export default async function LoginPage() {
  const session = await auth();

  // If no session, navigate to /dashboard
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
