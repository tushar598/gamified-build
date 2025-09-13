"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Award, AlertTriangle, CheckCircle } from "lucide-react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function PerformanceDashboard() {
  const overallMastery = 85

  const subjectPerformance = [
    { subject: "Mathematics", score: 92 },
    { subject: "Science", score: 85 },
    { subject: "History", score: 78 },
    { subject: "English", score: 88 },
  ]

  const quizTrendData = [
    { day: "Mon", score: 75 },
    { day: "Tue", score: 82 },
    { day: "Wed", score: 78 },
    { day: "Thu", score: 85 },
    { day: "Fri", score: 90 },
    { day: "Sat", score: 88 },
    { day: "Sun", score: 92 },
  ]

  const strengths = ["Algebraic Equations", "Historical Analysis"]
  const weakAreas = ["Advanced Geometry", "English Essay Writing"]
  const achievements = ["Master Historian", "Calculus Conqueror", "Grammar Guru"]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance Tracking Dashboard</h1>
          <div className="flex items-center space-x-4 mt-2">
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
              Student Dashboard
            </Button>
            <Button variant="outline" size="sm">
              Teacher Dashboard
            </Button>
            <Button variant="outline" size="sm">
              Parent Digest
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search subjects, chapters, or gai"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            30
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overall Mastery Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Overall Mastery Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${overallMastery}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{overallMastery}%</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600">
              You've mastered {overallMastery}% of your current curriculum objectives.
            </p>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Score",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" fill="var(--color-score)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <p className="text-sm text-gray-600 mt-2">Average scores across your active subjects.</p>
          </CardContent>
        </Card>

        {/* Recent Quiz Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Quiz Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Score",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={quizTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="var(--color-score)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-score)", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <p className="text-sm text-gray-600 mt-2">Your progress over the past week in quizzes.</p>
          </CardContent>
        </Card>

        {/* Areas to Improve */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <span>Areas to Improve</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weakAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200"
                >
                  <span className="font-medium text-orange-900">{area}</span>
                  <Badge variant="outline" className="text-orange-700 border-orange-300">
                    Focus
                  </Badge>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">Specific areas identified for further practice and focus.</p>
          </CardContent>
        </Card>

        {/* Your Strengths */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Your Strengths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                >
                  <span className="font-medium text-green-900">{strength}</span>
                  <Badge variant="outline" className="text-green-700 border-green-300">
                    Strong
                  </Badge>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">Topics where you excel and consistently perform well.</p>
          </CardContent>
        </Card>

        {/* Achievements Unlocked */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span>Achievements Unlocked</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                >
                  <Award className="w-6 h-6 text-yellow-600" />
                  <span className="font-medium text-yellow-900">{achievement}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">Badges earned through consistent effort and mastery.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
