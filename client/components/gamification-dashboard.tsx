// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Star, Search, Trophy, Target, Flame, Users, Lightbulb, BookOpen, Award, TrendingUp } from "lucide-react"

// export function GamificationDashboard() {
//   const userStats = {
//     level: 5,
//     currentXP: 2150,
//     nextLevelXP: 3000,
//     xpToNext: 850,
//     streak: 17,
//   }

//   const badges = [
//     { name: "Star Gazer", icon: Star, color: "text-yellow-500" },
//     { name: "Knowledge Seeker", icon: BookOpen, color: "text-blue-500" },
//     { name: "Puzzle Master", icon: Target, color: "text-purple-500" },
//   ]

//   const teamChallenges = [
//     {
//       name: "Math Olympiad Prep",
//       description: "Collaborate to solve advanced math problems.",
//       progress: 75,
//       participants: 24,
//     },
//     {
//       name: "Science Fair Project",
//       description: "Develop an innovative science experiment.",
//       progress: 40,
//       participants: 18,
//     },
//     {
//       name: "Creative Writing Contest",
//       description: "Write a short story based on a historical event.",
//       progress: 90,
//       participants: 32,
//     },
//   ]

//   const leaderboard = [
//     { name: "Alice Smith", xp: 850, avatar: "AS" },
//     { name: "Bob Johnson", xp: 780, avatar: "BJ" },
//     { name: "Charlie Brown", xp: 720, avatar: "CB" },
//     { name: "Diana Prince", xp: 690, avatar: "DP" },
//     { name: "Ethan Hunt", xp: 650, avatar: "EH" },
//   ]

//   const curiosityFeed = [
//     {
//       type: "fact",
//       title: "Did you know?",
//       content:
//         "Investing a small amount consistently over a long period can lead to significant wealth accumulation due to compounding interest? Einstein called it the eighth wonder of the world!",
//       source: "Financial Literacy Module",
//     },
//     {
//       type: "fact",
//       title: "Science Fact",
//       content:
//         "The sky appears blue because of a phenomenon called Rayleigh scattering. Shorter, blue wavelengths of sunlight are scattered more than other colors.",
//       source: "Physics Module",
//     },
//   ]

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Gamification Dashboard</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search subjects, chapters, or gai"
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
//           </div>
//           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
//             30
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* My Progress */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <TrendingUp className="w-5 h-5" />
//                 <span>My Progress</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900">Level {userStats.level}</h3>
//                     <p className="text-gray-600">{userStats.currentXP} XP</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-600">
//                       {userStats.xpToNext} XP to Level {userStats.level + 1}
//                     </p>
//                   </div>
//                 </div>
//                 <Progress value={(userStats.currentXP / userStats.nextLevelXP) * 100} className="h-3" />
//                 <p className="text-sm text-gray-600">Keep learning to unlock new challenges!</p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Earned Badges */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle className="flex items-center space-x-2">
//                   <Award className="w-5 h-5" />
//                   <span>Earned Badges</span>
//                 </CardTitle>
//                 <Button variant="outline" size="sm">
//                   View all
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-3 gap-4">
//                 {badges.map((badge, index) => (
//                   <div key={index} className="text-center">
//                     <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
//                       <badge.icon className={`w-8 h-8 ${badge.color}`} />
//                     </div>
//                     <p className="text-sm font-medium text-gray-900">{badge.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Team Challenges */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <Users className="w-5 h-5" />
//                 <span>Team Challenges</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {teamChallenges.map((challenge, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex items-start justify-between mb-3">
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-gray-900">{challenge.name}</h4>
//                       <p className="text-sm text-gray-600 mt-1">{challenge.description}</p>
//                     </div>
//                     <Button size="sm" variant="outline">
//                       Join
//                     </Button>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-600">{challenge.progress}% complete</span>
//                       <span className="text-gray-600">{challenge.participants} participants</span>
//                     </div>
//                     <Progress value={challenge.progress} className="h-2" />
//                   </div>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Daily Streak */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <Flame className="w-5 h-5 text-orange-500" />
//                 <span>Daily Streak</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//               <div className="text-4xl font-bold text-orange-500 mb-2">{userStats.streak}</div>
//               <p className="text-gray-600">Days in a row!</p>
//             </CardContent>
//           </Card>

//           {/* My Avatar */}
//           <Card>
//             <CardHeader>
//               <CardTitle>My Avatar</CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//               <Avatar className="w-20 h-20 mx-auto mb-4">
//                 <AvatarImage src="/placeholder.svg?height=80&width=80" />
//                 <AvatarFallback className="text-xl">U</AvatarFallback>
//               </Avatar>
//               <Button variant="outline" size="sm">
//                 Customize Avatar
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Chapter Leaderboards */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle className="flex items-center space-x-2">
//                   <Trophy className="w-5 h-5" />
//                   <span>Chapter Leaderboards</span>
//                 </CardTitle>
//                 <Button variant="outline" size="sm">
//                   View Full Leaderboard
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {leaderboard.map((user, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <div className="text-sm font-medium text-gray-500 w-4">{index + 1}.</div>
//                     <Avatar className="w-8 h-8">
//                       <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <p className="text-sm font-medium text-gray-900">{user.name}</p>
//                     </div>
//                     <div className="text-sm font-medium text-gray-600">{user.xp} XP</div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Curiosity Feed */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <Lightbulb className="w-5 h-5" />
//                 <span>Curiosity Feed</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {curiosityFeed.map((item, index) => (
//                 <div key={index} className="border-l-4 border-blue-500 pl-4">
//                   <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-700 mb-2">{item.content}</p>
//                   <p className="text-xs text-gray-500">Source: {item.source}</p>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Search, Trophy, Target, Flame, Users, Lightbulb, BookOpen, Award, TrendingUp } from "lucide-react"

export function GamificationDashboard() {
  const userStats = {
    level: 5,
    currentXP: 2150,
    nextLevelXP: 3000,
    xpToNext: 850,
    streak: 17,
  }

  const badges = [
    { name: "Daily Streak", icon: Flame, color: "text-orange-500" },
  ]

  const teamChallenges = [
    {
      name: "Math Olympiad Prep",
      description: "Collaborate to solve advanced math problems.",
      progress: 75,
    },
    {
      name: "Science Fair Project",
      description: "Develop an innovative science experiment.",
      progress: 40,
    },
    {
      name: "Creative Writing Contest",
      description: "Write a short story based on a historical event.",
      progress: 90,
    },
  ]

  const leaderboard = [
    { name: "Alice Smith", xp: 850 },
    { name: "Bob Johnson", xp: 780 },
    { name: "Charlie Brown", xp: 720 },
    { name: "Diana Prince", xp: 690 },
    { name: "Ethan Hunt", xp: 650 },
  ]

  const curiosityFeed = [
    {
      content: "Did you know that investing a small amount consistently over a long period can lead to significant wealth accumulation due to compounding interest? Einstein called it the eighth wonder of the world!",
      source: "Financial Literacy Module",
    },
    {
      content: "The sky appears blue because of a phenomenon called Rayleigh scattering. Shorter, blue wavelengths of sunlight are scattered more",
      source: "Physics Module",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gamification Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subjects, chapters, or gai"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              30
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Progress Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">My Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Level {userStats.level}</div>
                    <div className="text-gray-600">{userStats.currentXP} XP</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">{userStats.xpToNext} XP to Level {userStats.level + 1}</div>
                  </div>
                </div>
                <Progress value={(userStats.currentXP / userStats.nextLevelXP) * 100} className="h-2 bg-gray-200" />
              </div>
            </div>

            {/* Earned Badges Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Earned Badges</h2>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View all
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                      <badge.icon className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{badge.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{userStats.streak} Days in a row!</p>
                  </div>
                ))}
              </div>
            </div>

            {/* My Avatar Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">My Avatar</h2>
              <div className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-gray-200">
                  <AvatarFallback className="text-2xl text-gray-600">U</AvatarFallback>
                </Avatar>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Customize Avatar
                </Button>
              </div>
            </div>

            {/* Team Challenges Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Challenges</h2>
              <div className="space-y-4">
                {teamChallenges.map((challenge, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{challenge.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{challenge.description}</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Join
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2 bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Chapter Leaderboards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Chapter Leaderboards</h2>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View Full Leaderboard
                </Button>
              </div>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="text-sm font-medium text-gray-500 w-6 text-center">{index + 1}</div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-600">{user.xp} XP</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curiosity Feed */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Curiosity Feed</h2>
              <div className="space-y-4">
                {curiosityFeed.map((item, index) => (
                  <div key={index} className="text-sm text-gray-700 leading-relaxed">
                    <p>{item.content}</p>
                    <p className="text-xs text-gray-500 mt-2">Source: {item.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}