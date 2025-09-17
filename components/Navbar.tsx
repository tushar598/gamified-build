"use client";

import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SessionUser = {
  name?: string;
  image?: string;
  email?: string;
};

type Session = {
  user?: SessionUser;
  [key: string]: any;
} | null;

export default function Navbar() {
  const pathname = usePathname();
  const [session, setSession] = useState<Session>(null);

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (Object.keys(data).length !== 0) {
        setSession(data);
      }
    }
    fetchSession();
  }, []);

  const navLinks = [
    { href: "/dashboard", label: "Home" },
    { href: "/gamification", label: "Gamification" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="h-20 mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center aspect-square">
            <span className="text-white font-bold text-sm md:text-base">E</span>
          </div>
          <span className="text-lg md:text-xl font-bold text-blue-600">
            Learn-Yard
          </span>
        </div>

        {/* Right side: Links + Profile/Login */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth */}
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
             

              <form method="post" action="/api/auth/signout">
                <button
                  type="submit"
                  className="text-md cursor-pointer text-red-400 hover:text-red-500"
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
