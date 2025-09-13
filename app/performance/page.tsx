import { DashboardLayout } from "@/components/dashboard-layout"
import { PerformanceDashboard } from "@/components/performance-dashboard"

export default function PerformancePage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6">
        <PerformanceDashboard />
      </div>
    </DashboardLayout>
  )
}
