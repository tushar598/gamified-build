import { DashboardLayout } from "@/components/dashboard-layout"
import { MobileQuizInterface } from "@/components/mobile-quiz-interface"

export default function FoundationQuizPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6">
        <MobileQuizInterface />
      </div>
    </DashboardLayout>
  )
}
