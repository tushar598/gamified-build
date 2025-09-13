"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Play, Lock, CheckCircle } from "lucide-react"

export function MobileMathWorld() {
  const chapters = [
    {
      id: 1,
      title: "Numbers & Operations",
      progress: "2/4 Complete",
      description:
        "Master the fundamentals of arithmetic, including addition, subtraction, multiplication, and division.",
      levels: [
        { name: "Foundation", description: "Understand qua", status: "completed" },
        { name: "Practice", description: "Solve engaging pi", status: "unlocked" },
        { name: "Challenge", description: "Compete against the", status: "locked" },
        { name: "Mastery", description: "Apply advanced ope", status: "locked" },
      ],
    },
    {
      id: 2,
      title: "Geometry Explorations",
      progress: "1/3 Complete",
      description: "Discover shapes, spatial reasoning, and measurements in the geometric world.",
      levels: [
        { name: "Foundation", description: "Identify and diff", status: "completed" },
        { name: "Practice", description: "Calculate the are", status: "unlocked" },
        { name: "Challenge", description: "Solve complex volun", status: "locked" },
        { name: "Mastery", description: "Comprehensive understanding", status: "locked" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    if (status === "completed") return <CheckCircle className="w-4 h-4 text-green-500" />
    if (status === "unlocked") return <Play className="w-4 h-4 text-blue-500" />
    return <Lock className="w-4 h-4 text-gray-400" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between mb-6 text-sm font-medium">
        <span>9:41</span>
      </div>

      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-3 p-1">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Math World</h1>
        </div>
      </div>

      {/* Chapters */}
      <div className="space-y-6">
        {chapters.map((chapter) => (
          <Card key={chapter.id} className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-gray-900 mb-1">
                    Chapter {chapter.id}: {chapter.title}
                  </CardTitle>
                  <p className="text-sm text-blue-600 font-medium mb-2">{chapter.progress}</p>
                  <p className="text-sm text-gray-600">{chapter.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {chapter.levels.map((level, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      level.status === "completed"
                        ? "bg-green-50 border-green-200"
                        : level.status === "unlocked"
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{level.name}:</h4>
                        <span className="text-sm text-gray-600">{level.description}</span>
                      </div>
                      {level.status === "completed" && (
                        <span className="text-xs text-green-600 font-medium">Completed</span>
                      )}
                      {level.status === "unlocked" && (
                        <span className="text-xs text-blue-600 font-medium">Unlocked</span>
                      )}
                      {level.status === "locked" && <span className="text-xs text-gray-400 font-medium">Locked</span>}
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(level.status)}
                      {level.status === "unlocked" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs px-2 py-1">
                          <Play className="w-3 h-3 mr-1" />
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center space-y-1 text-blue-600">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <span className="text-xs">Worlds</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Gamify</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
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
