"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Search, Upload, Edit, Trash2, Users, DollarSign, BarChart3, Wifi, Settings, FileText } from "lucide-react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("content")

  const quizzes = [
    { title: "Algebra Basics", subject: "Mathematics", questions: 15, status: "Active" },
    { title: "Planetary Systems", subject: "Science", questions: 10, status: "Draft" },
    { title: "World War I Causes", subject: "History", questions: 20, status: "Active" },
    { title: "Literary Devices", subject: "English", questions: 12, status: "Active" },
    { title: "Chemical Reactions", subject: "Science", questions: 18, status: "Draft" },
  ]

  const signupData = [
    { month: "Jan", signups: 700 },
    { month: "Feb", signups: 1400 },
    { month: "Mar", signups: 2100 },
    { month: "Apr", signups: 2800 },
    { month: "May", signups: 2100 },
    { month: "Jun", signups: 1400 },
  ]

  const assets = [
    { name: "Math World Chapter 1", language: "English", type: "Chapter" },
    { name: "Science World Intro", language: "Spanish", type: "Introduction" },
    { name: "History Overview Guide", language: "French", type: "Guide" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="monetization">Monetization</TabsTrigger>
          <TabsTrigger value="offline">Offline Status</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Admin</TabsTrigger>
        </TabsList>

        {/* Content Management Tab */}
        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quiz Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Upload New Quiz</span>
                </CardTitle>
                <p className="text-sm text-gray-600">Add new quizzes by providing details and uploading quiz data.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="quiz-title">Quiz Title</Label>
                  <Input id="quiz-title" placeholder="e.g., Advanced Calculus" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quiz-subject">Subject</Label>
                  <Input id="quiz-subject" placeholder="e.g., Mathematics" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quiz-description">Description</Label>
                  <Textarea id="quiz-description" placeholder="Briefly describe the quiz content and objectives." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quiz-file">Quiz Data File (JSON/CSV)</Label>
                  <Input id="quiz-file" type="file" accept=".json,.csv" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Quiz
                </Button>
              </CardContent>
            </Card>

            {/* Asset Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Asset Management</span>
                </CardTitle>
                <p className="text-sm text-gray-600">Edit, delete, and organize multilingual content assets.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{asset.name}</p>
                      <p className="text-sm text-gray-600">
                        {asset.language} • {asset.type}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  Add New Asset
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Manage Existing Quizzes */}
          <Card>
            <CardHeader>
              <CardTitle>Manage Existing Quizzes</CardTitle>
              <p className="text-sm text-gray-600">Edit or delete quizzes from the platform.</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Title</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Questions</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizzes.map((quiz, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4">{quiz.title}</td>
                        <td className="py-3 px-4">{quiz.subject}</td>
                        <td className="py-3 px-4">{quiz.questions}</td>
                        <td className="py-3 px-4">
                          <Badge variant={quiz.status === "Active" ? "default" : "secondary"}>{quiz.status}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Adoption Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Adoption Statistics</span>
                </CardTitle>
                <p className="text-sm text-gray-600">Monitor user sign-ups and overall platform engagement.</p>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    signups: {
                      label: "Sign-ups",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={signupData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="signups"
                        stroke="var(--color-signups)"
                        strokeWidth={3}
                        dot={{ fill: "var(--color-signups)", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600">Total Sign-ups: 12,750</p>
                  <Button variant="outline" size="sm">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>System Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Minified JS</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Minified CSS</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">CDN Status</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Optimal
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Offline Caching</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Monetization Tab */}
        <TabsContent value="monetization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Monetization Settings</span>
              </CardTitle>
              <p className="text-sm text-gray-600">
                Control subscriptions, in-app purchases, and promotional campaigns.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Enable Premium Subscriptions</h4>
                  <p className="text-sm text-gray-600">Allow users to purchase premium access.</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">In-App Cosmetics Store</h4>
                  <p className="text-sm text-gray-600">Activate the store for avatar customizations.</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Promotional Offers</h4>
                  <p className="text-sm text-gray-600">Enable seasonal discount campaigns.</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Button>Configure Subscriptions</Button>
                <Button variant="outline">Manage Cosmetics</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Offline Status Tab */}
        <TabsContent value="offline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wifi className="w-5 h-5" />
                <span>Offline-First Architecture Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Overall System Health</h4>
                  <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  <p className="text-sm text-gray-600 mt-2">
                    All offline services are running smoothly with optimal performance.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Service Worker Status</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Version:</span>
                      <span>v1.2.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Scope:</span>
                      <span>/eduworld/</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mobile Admin Tab */}
        <TabsContent value="mobile" className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-4">
              <div className="text-sm font-medium mb-4">9:41</div>
              <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
              <div className="space-y-4">
                <Card className="text-left">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Quiz Upload</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Input placeholder="Enter quiz title" className="text-xs" />
                    <Textarea placeholder="Provide a brief description" className="text-xs" rows={2} />
                    <Button size="sm" className="w-full">
                      Upload Quiz
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-left">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Users className="w-4 h-4 mr-2" />
                      Manage User Accounts
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
