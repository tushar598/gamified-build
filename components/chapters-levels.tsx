"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play, Lock, CheckCircle } from "lucide-react"

export function ChaptersLevels() {
  const chapters = [
    {
      id: 1,
      title: "Algebraic Expressions",
      description: "Master the fundamentals of algebraic notation and manipulation.",
      levels: [
        {
          name: "Foundation",
          description: "Introduction to variables, constants, and basic",
          progress: 100,
          status: "completed",
        },
        {
          name: "Practice",
          description: "Solve problems involving addition, subtraction, and",
          progress: 100,
          status: "completed",
        },
        {
          name: "Challenge",
          description: "Tackle complex equations and word problems.",
          progress: 75,
          status: "in-progress",
        },
        {
          name: "Mastery",
          description: "Prove your expertise with advanced algebraic concepts.",
          progress: 0,
          status: "locked",
        },
      ],
    },
    {
      id: 2,
      title: "Equations and Inequalities",
      description: "Learn to solve and interpret various types of mathematical statements.",
      levels: [
        {
          name: "Foundation",
          description: "Understanding linear equations and single-variable",
          progress: 80,
          status: "in-progress",
        },
        {
          name: "Practice",
          description: "Practice solving systems of equations and quadratic",
          progress: 0,
          status: "locked",
        },
        {
          name: "Challenge",
          description: "Engage in complex scenarios with multiple variables.",
          progress: 0,
          status: "locked",
        },
        {
          name: "Mastery",
          description: "Attain full mastery over advanced equation types and",
          progress: 0,
          status: "locked",
        },
      ],
    },
    {
      id: 3,
      title: "Geometry Fundamentals",
      description: "Explore shapes, sizes, positions, and properties of space.",
      levels: [
        {
          name: "Foundation",
          description: "Basic geometric shapes, angles, and spatial reasoning.",
          progress: 0,
          status: "locked",
        },
        {
          name: "Practice",
          description: "Calculations of area, perimeter, and volume.",
          progress: 0,
          status: "locked",
        },
        {
          name: "Challenge",
          description: "Advanced geometric proofs and theorems.",
          progress: 0,
          status: "locked",
        },
        {
          name: "Mastery",
          description: "Comprehensive understanding of Euclidean and non-Euclidean",
          progress: 0,
          status: "locked",
        },
      ],
    },
  ]

  const getStatusIcon = (status: string, progress: number) => {
    if (status === "completed") {
      return <CheckCircle className="w-5 h-5 text-green-500" />
    } else if (status === "in-progress") {
      return <Play className="w-5 h-5 text-blue-500" />
    } else {
      return <Lock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    if (status === "completed") return "text-green-600"
    if (status === "in-progress") return "text-blue-600"
    return "text-gray-400"
  }

  return (
    <div className="space-y-8">
      {chapters.map((chapter) => (
        <Card key={chapter.id} className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Chapter {chapter.id}: {chapter.title}
            </CardTitle>
            <p className="text-gray-600">{chapter.description}</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {chapter.levels.map((level, index) => (
                <div
                  key={level.name}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    level.status === "locked"
                      ? "border-gray-200 bg-gray-50"
                      : level.status === "completed"
                        ? "border-green-200 bg-green-50"
                        : "border-blue-200 bg-blue-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {level.name === "Mastery" && <span className="text-yellow-500">★</span>}
                      <h3 className={`font-semibold ${getStatusColor(level.status)}`}>{level.name}</h3>
                    </div>
                    {getStatusIcon(level.status, level.progress)}
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{level.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Progress</span>
                      <span className={`font-medium ${getStatusColor(level.status)}`}>{level.progress}%</span>
                    </div>
                    <Progress value={level.progress} className="h-2" />

                    {level.status === "in-progress" && (
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Play className="w-4 h-4 mr-2" />
                        Start Game
                      </Button>
                    )}

                    {level.status === "locked" && <div className="text-center text-sm text-gray-400 py-2">Locked</div>}

                    {level.status === "completed" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                      >
                        Review Content
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
  )
}
