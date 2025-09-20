import { DashboardLayout } from "@/components/dashboard-layout"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function AdminPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6">
        <AdminDashboard />
      </div>
    </DashboardLayout>
  )
}
