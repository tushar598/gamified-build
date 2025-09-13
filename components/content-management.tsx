"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Edit, Trash2, Eye, Globe, FileText, Video, ImageIcon } from "lucide-react"

const existingQuizzes = [
  {
    title: "Algebra Basics",
    subject: "Mathematics",
    questions: 15,
    status: "Active",
    language: "English",
  },
  {
    title: "Planetary Systems",
    subject: "Science",
    questions: 10,
    status: "Draft",
    language: "English",
  },
  {
    title: "World War I Causes",
    subject: "History",
    questions: 20,
    status: "Active",
    language: "English",
  },
  {
    title: "Literary Devices",
    subject: "English",
    questions: 12,
    status: "Active",
    language: "English",
  },
  {
    title: "Chemical Reactions",
    subject: "Science",
    questions: 18,
    status: "Draft",
    language: "Spanish",
  },
]

const multilingualAssets = [
  {
    name: "Math World Chapter 1",
    type: "Content",
    language: "English",
    status: "Published",
    lastModified: "2023-10-25",
  },
  {
    name: "Science World Intro",
    type: "Video",
    language: "Spanish",
    status: "Review",
    lastModified: "2023-10-24",
  },
  {
    name: "History Overview Guide",
    type: "Document",
    language: "French",
    status: "Draft",
    lastModified: "2023-10-23",
  },
  {
    name: "English Grammar Basics",
    type: "Interactive",
    language: "English",
    status: "Published",
    lastModified: "2023-10-22",
  },
  {
    name: "Math Formulas Reference",
    type: "Document",
    language: "German",
    status: "Translation",
    lastModified: "2023-10-21",
  },
]

const usageStats = [
  { content: "Algebra Basics Quiz", views: 1250, completions: 980, rating: 4.8 },
  { content: "Science Lab Simulation", views: 890, completions: 720, rating: 4.6 },
  { content: "History Timeline", views: 650, completions: 520, rating: 4.7 },
  { content: "English Writing Guide", views: 1100, completions: 850, rating: 4.9 },
]

export function ContentManagement() {
  const [selectedTab, setSelectedTab] = useState("quizzes")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-muted-foreground mt-2">Manage quizzes, topics, multilingual assets, and track usage.</p>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="multilingual">Multilingual Assets</TabsTrigger>
          <TabsTrigger value="usage">Usage Tracking</TabsTrigger>
        </TabsList>

        {/* Quizzes Tab */}
        <TabsContent value="quizzes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Upload New Quiz</span>
              </CardTitle>
              <CardDescription>Add new quizzes by providing details and uploading quiz data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quiz-title">Quiz Title</Label>
                  <Input id="quiz-title" placeholder="e.g., Advanced Calculus" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quiz-subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="e.g., Mathematics" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiz-description">Description</Label>
                <Textarea id="quiz-description" placeholder="Briefly describe the quiz content and objectives." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiz-file">Quiz Data File (JSON/CSV)</Label>
                <Input id="quiz-file" type="file" accept=".json,.csv" />
              </div>
              <Button className="w-full md:w-auto">
                <Upload className="w-4 h-4 mr-2" />
                Upload Quiz
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Existing Quizzes</CardTitle>
              <CardDescription>Edit or delete quizzes from the platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Title</th>
                      <th className="text-left p-3">Subject</th>
                      <th className="text-left p-3">Questions</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Language</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {existingQuizzes.map((quiz, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{quiz.title}</td>
                        <td className="p-3 text-muted-foreground">{quiz.subject}</td>
                        <td className="p-3">{quiz.questions}</td>
                        <td className="p-3">
                          <Badge variant={quiz.status === "Active" ? "default" : "secondary"}>{quiz.status}</Badge>
                        </td>
                        <td className="p-3">{quiz.language}</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
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

        {/* Topics Tab */}
        <TabsContent value="topics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Topic Management</CardTitle>
              <CardDescription>Organize and manage learning topics across subjects.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Mathematics</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">45 topics, 12 languages</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Manage Topics
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Science</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">38 topics, 8 languages</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Manage Topics
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">History</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">32 topics, 6 languages</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Manage Topics
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold">English</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">28 topics, 15 languages</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Manage Topics
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Multilingual Assets Tab */}
        <TabsContent value="multilingual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Multilingual Asset Management</span>
              </CardTitle>
              <CardDescription>Manage content translations and multilingual resources.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="document">Document</SelectItem>
                    <SelectItem value="interactive">Interactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Add New Asset
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Asset Name</th>
                      <th className="text-left p-3">Type</th>
                      <th className="text-left p-3">Language</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Last Modified</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {multilingualAssets.map((asset, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{asset.name}</td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            {asset.type === "Video" && <Video className="w-4 h-4 text-red-500" />}
                            {asset.type === "Document" && <FileText className="w-4 h-4 text-blue-500" />}
                            {asset.type === "Content" && <FileText className="w-4 h-4 text-green-500" />}
                            {asset.type === "Interactive" && <ImageIcon className="w-4 h-4 text-purple-500" />}
                            <span className="text-sm">{asset.type}</span>
                          </div>
                        </td>
                        <td className="p-3">{asset.language}</td>
                        <td className="p-3">
                          <Badge
                            variant={
                              asset.status === "Published"
                                ? "default"
                                : asset.status === "Review"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {asset.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-muted-foreground">{asset.lastModified}</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
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

          {/* Translation Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Translation Progress</CardTitle>
              <CardDescription>Track translation status across different languages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Spanish</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">French</span>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">German</span>
                    <span className="text-sm text-muted-foreground">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "58%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Mandarin</span>
                    <span className="text-sm text-muted-foreground">34%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "34%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tracking Tab */}
        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Usage Analytics</CardTitle>
              <CardDescription>Track how content is being used across the platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Content</th>
                      <th className="text-left p-3">Views</th>
                      <th className="text-left p-3">Completions</th>
                      <th className="text-left p-3">Completion Rate</th>
                      <th className="text-left p-3">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageStats.map((stat, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{stat.content}</td>
                        <td className="p-3">{stat.views.toLocaleString()}</td>
                        <td className="p-3">{stat.completions.toLocaleString()}</td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${(stat.completions / stat.views) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {Math.round((stat.completions / stat.views) * 100)}%
                            </span>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="font-medium">{stat.rating}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Content Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Content Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3,890</div>
                <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Average Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">78.2%</div>
                <p className="text-sm text-green-600 mt-1">+3.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4.7</div>
                <p className="text-sm text-green-600 mt-1">+0.2 from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
