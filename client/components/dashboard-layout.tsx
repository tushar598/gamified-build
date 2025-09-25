"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  BookOpen,
  Brain,
  History,
  FileText,
  Gamepad2,
  Trophy,
  Target,
  Settings,
  LifeBuoy,
  Users,
  DollarSign,
  BarChart3,
  TrendingUp,
  Wifi,
  Lightbulb,
  Menu,
  X,
  Grid,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(true);
  const [openWorld, setOpenWorld] = useState<string | null>(null);

  const subjectWorldItems = [
    { icon: Brain, label: "Math World", href: "/math" , active: false},
    { icon: BookOpen, label: "Science World", href: "/science" },
    { icon: History, label: "History World", href: "/history" },
    { icon: FileText, label: "English World", href: "/english" },
  ];

  const featureItems = [
    { icon: BookOpen, label: "Chapters & Levels", href: "/chapters" },
    { icon: Gamepad2, label: "Quizzes", href: "/quiz" },
    { icon: Gamepad2, label: "Micro-Games", href: "/micro-games" },
    { icon: Target, label: "Challenges", href: "/challenges" },
  ];

  const adminToolItems = [
    { icon: Users, label: "User Management", href: "/admin" },
    { icon: BarChart3, label: "System Analytics", href: "/analytics" },
  ];

  return (
    <div className="flex h-screen gap-y-3 bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="ml-2 text-lg font-bold text-gray-800">
              EduWorld
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Dashboard */}
          <nav className="px-4 space-y-1">
            <a
              href="/dashboard"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              <Home className="mr-3 h-4 w-4" />
              Dashboard
            </a>
          </nav>

          {/* Subject Worlds with Dropdown Features */}
          <div className="mt-4 px-4">
            <button
              onClick={() => setSubjectOpen(!subjectOpen)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <span className="flex items-center">
                <Grid className="mr-3 h-4 w-4" />
                Subject Worlds
              </span>
              <span className="text-xs text-gray-500">
                {subjectOpen ? "▲" : "▼"}
              </span>
            </button>

            {subjectOpen && (
              <nav className="mt-2 ml-4 space-y-1">
                {subjectWorldItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setOpenWorld(
                          openWorld === item.label ? null : item.label
                        )
                      }
                      className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span className="flex items-center">
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.label}
                      </span>
                      {openWorld === item.label ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {openWorld === item.label && (
                      <div className="ml-6 mt-1 space-y-1">
                        {featureItems.map((feature) => (
                          <a
                            key={feature.label}
                            href={feature.href}
                            className="flex items-center px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
                          >
                            <feature.icon className="mr-2 h-4 w-4" />
                            {feature.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>

          {/* Admin Tools */}
          <div className="mt-6 px-4">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Admin Tools
            </h3>
            <nav className="mt-2 space-y-1">
              {adminToolItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div className=" px-4 border-t border-gray-200 pt-4">
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                <LifeBuoy className="mr-2 h-4 w-4" /> Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="ml-2 text-sm font-bold text-gray-800">
              EduWorld
            </span>
          </div>
        </div>

        {children}
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
