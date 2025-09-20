import { DashboardLayout } from "@/components/dashboard-layout"
import { QuizInterface } from "@/components/quiz-interface"

export default function QuizPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6">
        <QuizInterface />
      </div>
    </DashboardLayout>
  )
}
