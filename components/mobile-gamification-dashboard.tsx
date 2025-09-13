"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, BookOpen, Target, Flame } from "lucide-react"

export function MobileGamificationDashboard() {
  const userStats = {
    level: 12,
    currentXP: 1250,
    nextLevelXP: 2000,
    streak: 25,
  }

  const badges = [
    { name: "Star Gazer", icon: Star, color: "text-yellow-500" },
    { name: "Knowledge Seeker", icon: BookOpen, color: "text-blue-500" },
    { name: "Puzzle Master", icon: Target, color: "text-purple-500" },
  ]

  const leaderboard = [
    { name: "Luna Spark", xp: 5800, avatar: "LS" },
    { name: "Kai Nova", xp: 5100, avatar: "KN" },
    { name: "Anya Taylor", xp: 4950, avatar: "AT" },
    { name: "Maya River", xp: 4700, avatar: "MR" },
  ]

  const curiosityFeed = [
    {
      type: "fact",
      title: "Did you know?",
      content: "Learning a new skill boosts your brain power by creating new neural pathways!",
    },
    {
      type: "challenge",
      title: "Challenge yourself!",
      content: "Try the advanced Math quiz in the Calculus World for extra XP this week.",
    },
    {
      type: "achievement",
      title: "Achievement Unlocked!",
      content: 'Complete 3 chapters in Science World to earn the "Lab Master" badge.',
    },
    {
      type: "content",
      title: "Explore new content",
      content: "New interactive lessons on Ancient History are now available. Check them out!",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between mb-6 text-sm font-medium">
        <span>9:41</span>
      </div>

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Gamification</h1>
      </div>

      <div className="space-y-6">
        {/* XP Progress */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">XP Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  Level {userStats.level}: {userStats.currentXP} XP
                </h3>
                <p className="text-gray-600">Next Level: {userStats.nextLevelXP} XP</p>
              </div>
              <Progress value={(userStats.currentXP / userStats.nextLevelXP) * 100} className="h-3" />
              <p className="text-sm text-gray-600 text-center">Keep learning to unlock new challenges!</p>
            </div>
          </CardContent>
        </Card>

        {/* Earned Badges */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Earned Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                    <badge.icon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <p className="text-xs font-medium text-gray-900">{badge.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Your Avatar */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Your Avatar</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Avatar className="w-16 h-16 mx-auto mb-4">
              <AvatarFallback className="text-lg">U</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Customize Items
            </Button>
          </CardContent>
        </Card>

        {/* Streaks & Challenges */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Streaks & Challenges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Flame className="w-6 h-6 text-orange-500" />
                <span className="text-2xl font-bold text-orange-500">{userStats.streak}</span>
              </div>
              <p className="text-sm text-gray-600">Day Streak!</p>
              <p className="text-xs text-gray-500">Keep up the consistent learning.</p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Team Challenge: Eco Warriors</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">750/1000 points</span>
                  <span className="text-gray-600">75% complete</span>
                </div>
                <Progress value={75} className="h-2" />
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Team Progress
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Learners */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Top Learners</CardTitle>
              <Button variant="outline" size="sm">
                View Full Leaderboard
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-gray-500 w-4">{index + 1}.</div>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-600">{user.xp}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Curiosity Feed */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Curiosity Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {curiosityFeed.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-700">{item.content}</p>
              </div>
            ))}
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
          <button className="flex flex-col items-center space-y-1 text-blue-600">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
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
