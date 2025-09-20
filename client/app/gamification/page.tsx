import { DashboardLayout } from "@/components/dashboard-layout"
import { GamificationDashboard } from "@/components/gamification-dashboard"

export default function GamificationPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6">
        <GamificationDashboard />
      </div>
    </DashboardLayout>
  )
}
