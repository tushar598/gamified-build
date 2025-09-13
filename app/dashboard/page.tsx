import { DashboardLayout } from "@/components/dashboard-layout"
import { ChaptersLevels } from "@/components/chapters-levels"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Math World: Chapters & Levels</h1>
            <p className="text-gray-600 mt-2">
              Embark on your mathematical journey, chapter by chapter, mastering each level from Foundation to true
              Mastery. Each completed level brings you closer to becoming a math wizard!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subjects, chapters, or gai"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              30
            </div>
          </div>
        </div>

        <ChaptersLevels />
      </div>
    </DashboardLayout>
  )
}
