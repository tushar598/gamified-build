"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, Settings, Trophy, BookOpen, Target, Calendar, Star, Award, TrendingUp } from "lucide-react"

export function MobileProfile() {
  const achievements = [
    { name: "Math Master", description: "Complete 50 math quizzes", progress: 42, total: 50, icon: Trophy },
    { name: "Streak Champion", description: "7-day learning streak", progress: 7, total: 7, icon: Calendar },
    { name: "Quiz Ace", description: "Score 90%+ on 10 quizzes", progress: 8, total: 10, icon: Star },
  ]

  const stats = [
    { label: "Total XP", value: "2,450", icon: TrendingUp },
    { label: "Quizzes Completed", value: "127", icon: BookOpen },
    { label: "Current Streak", value: "12 days", icon: Calendar },
    { label: "Rank", value: "#23", icon: Trophy },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              S
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Sarah Johnson</h2>
              <p className="text-muted-foreground">Level 15 Explorer</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress to Level 16</span>
                  <span>2,450 / 3,000 XP</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <IconComponent className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            const isCompleted = achievement.progress >= achievement.total
            return (
              <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className={`p-2 rounded-lg ${isCompleted ? "bg-green-100" : "bg-gray-100"}`}>
                  <IconComponent className={`w-5 h-5 ${isCompleted ? "text-green-600" : "text-gray-600"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{achievement.name}</h3>
                    {isCompleted && <Badge className="bg-green-500">Completed</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>
                        {achievement.progress} / {achievement.total}
                      </span>
                    </div>
                    <Progress value={(achievement.progress / achievement.total) * 100} className="h-1" />
                  </div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <User className="w-4 h-4 mr-3" />
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Settings className="w-4 h-4 mr-3" />
            Preferences
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Target className="w-4 h-4 mr-3" />
            Learning Goals
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
