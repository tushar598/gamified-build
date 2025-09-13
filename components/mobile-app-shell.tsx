"use client"

import { useState } from "react"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MobileSubjectWorlds } from "@/components/mobile-subject-worlds"
import { MobileGamificationDashboard } from "@/components/mobile-gamification-dashboard"
import { MobileDashboard } from "@/components/mobile-dashboard"
import { MobileAdminPanel } from "@/components/mobile-admin-panel"
import { MobileProfile } from "@/components/mobile-profile"
import { MobileSearch } from "@/components/mobile-search"
import { MobileLibrary } from "@/components/mobile-library"

export function MobileAppShell() {
  const [currentPage, setCurrentPage] = useState("worlds")

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "worlds":
        return <MobileSubjectWorlds />
      case "gamify":
        return <MobileGamificationDashboard />
      case "dashboard":
        return <MobileDashboard />
      case "admin":
        return <MobileAdminPanel />
      case "profile":
        return <MobileProfile />
      case "search":
        return <MobileSearch />
      case "library":
        return <MobileLibrary />
      default:
        return <MobileSubjectWorlds />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="pb-20 pt-16">{renderCurrentPage()}</div>
    </div>
  )
}
