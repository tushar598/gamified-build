"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Trophy,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  User,
  Search,
  BookOpen,
  Target,
  Award,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function MobileNavigation({ currentPage, onNavigate }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { id: "worlds", label: "Worlds", icon: Home },
    { id: "gamify", label: "Gamify", icon: Trophy },
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "admin", label: "Admin", icon: Settings },
  ]

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "search", label: "Search", icon: Search },
    { id: "library", label: "Library", icon: BookOpen },
    { id: "goals", label: "Goals", icon: Target },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "community", label: "Community", icon: Users },
  ]

  return (
    <>
      {/* Top Status Bar */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <div className="text-sm font-medium">9:41</div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-2 relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 text-xs bg-red-500">3</Badge>
          </Button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            S
          </div>
        </div>
      </div>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform">
            <div className="p-6 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Level 15 Explorer</p>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      onNavigate(item.id)
                      setIsMenuOpen(false)
                    }}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
        <div className="flex items-center justify-around">
          {navigationItems.map((item) => {
            const IconComponent = item.icon
            const isActive = currentPage === item.id
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn("flex flex-col items-center space-y-1 p-2 h-auto", isActive && "text-blue-600")}
                onClick={() => onNavigate(item.id)}
              >
                <IconComponent className={cn("w-5 h-5", isActive && "text-blue-600")} />
                <span className={cn("text-xs", isActive && "text-blue-600 font-medium")}>{item.label}</span>
                {isActive && <div className="w-1 h-1 bg-blue-600 rounded-full" />}
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}
