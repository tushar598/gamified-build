"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Lock, CheckCircle } from "lucide-react"

export function MobileSubjectWorlds() {
  const subjectWorlds = [
    {
      name: "Math World",
      progress: 75,
      completedChapters: 3,
      totalChapters: 4,
      status: "unlocked",
      image: "/math-cityscape.jpg",
    },
    {
      name: "Science World",
      progress: 40,
      completedChapters: 2,
      totalChapters: 5,
      status: "unlocked",
      image: "/science-forest.jpg",
    },
    {
      name: "History Land",
      progress: 0,
      completedChapters: 0,
      totalChapters: 3,
      status: "locked",
      image: "/history-ancient-statue.jpg",
    },
    {
      name: "Art Galaxy",
      progress: 0,
      completedChapters: 0,
      totalChapters: 2,
      status: "locked",
      image: "/art-galaxy-space.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between mb-6 text-sm font-medium">
        <span>9:41</span>
      </div>

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Subject Worlds</h1>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Explore Your Learning Journey</h2>
          <p className="text-gray-600 text-sm mb-4">
            Dive into diverse subjects and track your mastery. Every challenge brings a new adventure!
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium">
            Start New World
          </Button>
        </div>
      </div>

      {/* Subject Worlds Grid */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Your Subject Worlds</h3>
        <div className="grid grid-cols-1 gap-4">
          {subjectWorlds.map((world, index) => (
            <Card
              key={index}
              className={`shadow-lg border-0 bg-white/95 backdrop-blur-sm ${
                world.status === "locked" ? "opacity-60" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="relative">
                  <img
                    src={world.image || "/placeholder.svg"}
                    alt={world.name}
                    className="w-full h-24 object-cover rounded-lg mb-3"
                  />
                  {world.status === "locked" && (
                    <div className="absolute inset-0 bg-gray-900/50 rounded-lg flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{world.name}</span>
                  {world.status === "unlocked" && <CheckCircle className="w-5 h-5 text-green-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{world.progress}%</span>
                  </div>
                  <Progress value={world.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {world.completedChapters}/{world.totalChapters}
                    </span>
                    <span className="text-gray-600">Completed Chapters</span>
                  </div>
                  <div className="text-center pt-2">
                    {world.status === "unlocked" ? (
                      <span className="text-green-600 font-medium text-sm">Unlocked</span>
                    ) : (
                      <span className="text-gray-400 font-medium text-sm">Locked</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
