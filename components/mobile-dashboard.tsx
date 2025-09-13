"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MobileDashboard() {
  const subjects = [
    { name: "Math", progress: 85, color: "bg-blue-500" },
    { name: "Science", progress: 72, color: "bg-green-500" },
    { name: "History", progress: 68, color: "bg-yellow-500" },
    { name: "English", progress: 79, color: "bg-purple-500" },
  ]

  const weakAreas = ["Advanced Geometry", "Essay Writing"]
  const strongAreas = ["Algebra", "Historical Analysis"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between mb-6 text-sm font-medium">
        <span>9:41</span>
      </div>

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <div className="flex items-center justify-center space-x-6 text-sm">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">My Progress</button>
          <button className="text-gray-600">Class Overview</button>
          <button className="text-gray-600">Parent Digest</button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Mastery Progress */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Mastery Progress</CardTitle>
            <p className="text-sm text-gray-600">Visual overview of your proficiency across subjects.</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{subject.name}</span>
                    <span className="text-sm text-gray-600">{subject.progress}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${subject.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weak & Strong Areas */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Weak & Strong Areas</CardTitle>
            <p className="text-sm text-gray-600">Identifies topics where you excel or need more focus.</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Weak Areas</h4>
                <div className="space-y-2">
                  {weakAreas.map((area, index) => (
                    <div key={index} className="p-2 bg-red-50 border border-red-200 rounded-lg">
                      <span className="text-sm text-red-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Strong Areas</h4>
                <div className="space-y-2">
                  {strongAreas.map((area, index) => (
                    <div key={index} className="p-2 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-sm text-green-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Worlds</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Gamify</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-blue-600">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <span className="text-xs">Dashboard</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Admin</span>
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8 pb-20">Made with Visily</div>
    </div>
  )
}
