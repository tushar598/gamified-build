"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Home,
  BookOpen,
  Brain,
  History,
  FileText,
  HelpCircle,
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
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const mainNavItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    { icon: Gamepad2, label: "Gamification", href: "/gamification" },
    { icon: BarChart3, label: "Performance", href: "/performance" },
    { icon: Users, label: "Admin", href: "/admin" },
    { icon: TrendingUp, label: "Analytics", href: "/analytics" },
  ]

  const subjectWorldItems = [
    { icon: Brain, label: "Math World", href: "/dashboard/math", active: true },
    { icon: BookOpen, label: "Science World", href: "/dashboard/science" },
    { icon: History, label: "History World", href: "/dashboard/history" },
    { icon: FileText, label: "English World", href: "/dashboard/english" },
  ]

  const featureItems = [
    { icon: BookOpen, label: "Chapters & Levels", href: "/chapters" },
    { icon: HelpCircle, label: "Quizzes", href: "/quizzes" },
    { icon: Gamepad2, label: "Micro-Games", href: "/micro-games" },
    { icon: Trophy, label: "Leaderboards", href: "/leaderboards" },
    { icon: Target, label: "Challenges", href: "/challenges" },
  ]

  const adminToolItems = [
    { icon: BookOpen, label: "Content Mgmt", href: "/admin/content" },
    { icon: Users, label: "User Management", href: "/admin/users" },
    { icon: DollarSign, label: "Monetization", href: "/admin/monetization" },
    { icon: BarChart3, label: "System Analytics", href: "/admin/analytics" },
    { icon: TrendingUp, label: "Growth Metrics", href: "/admin/growth" },
    { icon: Wifi, label: "Offline Status", href: "/admin/offline" },
    { icon: Lightbulb, label: "Solutions", href: "/admin/solutions" },
    { icon: Brain, label: "AI Scope", href: "/admin/ai-scope" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="ml-2 text-lg font-bold text-gray-800">EduWorld</span>
          </div>
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Main Navigation */}
          <nav className="px-4 space-y-1">
            {mainNavItems.map((item) => (
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

          {/* Subject Worlds */}
          <div className="mt-6 px-4">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject Worlds</h3>
            <nav className="mt-2 space-y-1">
              {subjectWorldItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    item.active ? "bg-blue-100 text-blue-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Features */}
          <div className="mt-6 px-4">
            <nav className="space-y-1">
              {featureItems.map((item) => (
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

          {/* Admin Tools */}
          <div className="mt-6 px-4">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Admin Tools</h3>
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

          {/* Settings & Support */}
          <div className="mt-6 px-4 border-t border-gray-200 pt-4">
            <nav className="space-y-1">
              <a
                href="/settings"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </a>
              <a
                href="/support"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <LifeBuoy className="mr-3 h-4 w-4" />
                Support
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-400 text-center">Made with Visily</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="ml-2 text-sm font-bold text-gray-800">EduWorld</span>
          </div>
        </div>

        {children}
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
