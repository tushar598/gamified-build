import { auth } from "@/auth";
import { User, Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { handleSignOut } from "@/app/actions/authActions";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-blue-600">logo</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/dashboard" className="text-blue-600">
            Home
          </Link>
          <Link
            href="/gamification"
            className="text-gray-700 hover:text-blue-600"
          >
            Gamification
          </Link>
          <Link
            href="/performance"
            className="text-gray-700 hover:text-blue-600"
          >
            Performance
          </Link>
          <Link href="/admin" className="text-gray-700 hover:text-blue-600">
            Admin
          </Link>
          <Link href="/analytics" className="text-gray-700 hover:text-blue-600">
            Analytics
          </Link>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-4 ml-6">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>

          {session?.user ? (
            <div className="flex items-center space-x-2">
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt="User profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <User className="h-6 w-6 text-gray-600" />
              )}
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {session.user.name}
              </span>

              {/* Logout handled via server action */}
              <form action={handleSignOut}>
                <button
                  type="submit"
                  className="text-xs text-red-500 hover:underline"
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            // If not logged in → go to /login page
            <Link
              href="/login"
              className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
