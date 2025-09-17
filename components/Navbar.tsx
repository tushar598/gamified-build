import { auth } from "@/auth";
import { User, Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className=" h-20 mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center aspect-square">
            <span className="text-white font-bold text-sm md:text-base">E</span>
          </div>
          <span className="text-lg md:text-xl font-bold text-blue-600">
            Learn-Yard
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <Link href="/dashboard" className="text-blue-600">
            Home
          </Link>
          <Link
            href="/gamification"
            className="text-gray-700 hover:text-blue-600"
          >
            Gamification
          </Link>
          <Link href="/" className="text-gray-700 hover:text-blue-600">
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
        <div className="flex items-center space-x-4 ml-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          {session?.user ? (
            <div className="flex items-center space-x-2">
              {session.user.image ? (
                <div className="relative w-8 h-8 md:w-9 md:h-9 aspect-square">
                  <Image
                    src={session.user.image}
                    alt="User profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ) : (
                <User className="w-6 h-6 text-gray-600" />
              )}
              <span className="hidden md:block text-sm md:text-base font-medium text-gray-700">
                {session.user.name}
              </span>

              {/* Logout */}
              <form method="post" action="/api/auth/signout">
                <button
                  type="submit"
                  className="text-xs md:text-sm text-red-500 hover:underline"
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-1 px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700"
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
