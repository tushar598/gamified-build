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
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Upload,
  Edit,
  Trash2,
  Users,
  DollarSign,
  BarChart3,
  Wifi,
  Settings,
  FileText,
  Shield,
  Database,
  Server,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  UserCheck,
  UserX,
  Mail,
  Bell,
  Download,
  Eye,
  Zap,
} from "lucide-react"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

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

  const systemHealthData = [
    { time: "00:00", cpu: 45, memory: 62, disk: 78 },
    { time: "04:00", cpu: 52, memory: 58, disk: 78 },
    { time: "08:00", cpu: 68, memory: 72, disk: 79 },
    { time: "12:00", cpu: 75, memory: 85, disk: 80 },
    { time: "16:00", cpu: 82, memory: 78, disk: 81 },
    { time: "20:00", cpu: 65, memory: 70, disk: 82 },
  ]

  const userActivityData = [
    { day: "Mon", active: 1200, new: 45 },
    { day: "Tue", active: 1350, new: 52 },
    { day: "Wed", active: 1180, new: 38 },
    { day: "Thu", active: 1420, new: 67 },
    { day: "Fri", active: 1580, new: 78 },
    { day: "Sat", active: 980, new: 32 },
    { day: "Sun", active: 850, new: 28 },
  ]

  const recentUsers = [
    { name: "Sarah Johnson", email: "sarah.j@email.com", status: "Active", joined: "2023-10-27", role: "Student" },
    { name: "Mike Chen", email: "mike.chen@email.com", status: "Pending", joined: "2023-10-26", role: "Teacher" },
    { name: "Emma Davis", email: "emma.d@email.com", status: "Active", joined: "2023-10-25", role: "Student" },
    { name: "Alex Rodriguez", email: "alex.r@email.com", status: "Suspended", joined: "2023-10-24", role: "Student" },
  ]

  const systemAlerts = [
    { type: "warning", message: "High memory usage detected on server cluster 2", time: "5 min ago" },
    { type: "info", message: "Scheduled maintenance completed successfully", time: "2 hours ago" },
    { type: "error", message: "Failed login attempts from IP 192.168.1.100", time: "3 hours ago" },
    { type: "success", message: "Database backup completed", time: "6 hours ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Admin Panel</h1>
          <p className="text-muted-foreground mt-1">Comprehensive system management and monitoring</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users, content, or system logs"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Alerts (3)
          </Button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="monetization">Monetization</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Admin</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <p className="text-xs text-green-600 mt-1">+8.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,423</div>
                <p className="text-xs text-green-600 mt-1">+12.5% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">System Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Revenue (MTD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,680</div>
                <p className="text-xs text-green-600 mt-1">+15.3% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* System Health Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>System Performance (24h)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={systemHealthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <ChartTooltip />
                    <Area
                      type="monotone"
                      dataKey="cpu"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                      name="CPU %"
                    />
                    <Area
                      type="monotone"
                      dataKey="memory"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                      name="Memory %"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>User Activity (7 days)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="active" fill="#3b82f6" name="Active Users" />
                    <Bar dataKey="new" fill="#10b981" name="New Users" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent User Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.email} • {user.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            user.status === "Active"
                              ? "default"
                              : user.status === "Pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {user.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{user.joined}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>System Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === "error"
                            ? "bg-red-500"
                            : alert.type === "warning"
                              ? "bg-yellow-500"
                              : alert.type === "success"
                                ? "bg-green-500"
                                : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

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

        {/* System Health Tab */}
        <TabsContent value="system" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">System Health & Monitoring</h2>
              <p className="text-muted-foreground">Real-time system performance and infrastructure status</p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Logs
            </Button>
          </div>

          {/* System Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Server Status</p>
                      <p className="font-semibold text-green-600">Operational</p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Database</p>
                      <p className="font-semibold text-green-600">Healthy</p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">CDN Status</p>
                      <p className="font-semibold text-green-600">Optimal</p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">API Response</p>
                      <p className="font-semibold">125ms avg</p>
                    </div>
                  </div>
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resource Usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="text-sm text-muted-foreground">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Memory Usage</span>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Disk Usage</span>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Network I/O</span>
                    <span className="text-sm text-muted-foreground">32%</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Health Checks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Authentication Service</span>
                  </div>
                  <Badge variant="default" className="bg-green-500">
                    Healthy
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Content Delivery</span>
                  </div>
                  <Badge variant="default" className="bg-green-500">
                    Healthy
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Analytics Service</span>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-500">
                    Warning
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Payment Gateway</span>
                  </div>
                  <Badge variant="default" className="bg-green-500">
                    Healthy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">User Management</h2>
              <p className="text-muted-foreground">Manage user accounts, roles, and permissions</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Users
              </Button>
              <Button>
                <UserCheck className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>

          {/* User Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">12,847</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold">11,203</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold">1,244</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <UserX className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Suspended</p>
                    <p className="text-2xl font-bold">400</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* User Management Tools */}
          <Card>
            <CardHeader>
              <CardTitle>User Management Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Search users by name, email, or ID" className="flex-1" />
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="student">Students</SelectItem>
                    <SelectItem value="teacher">Teachers</SelectItem>
                    <SelectItem value="admin">Administrators</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">User</th>
                      <th className="text-left p-3">Role</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Last Active</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </td>
                        <td className="p-3">{user.role}</td>
                        <td className="p-3">
                          <Badge
                            variant={
                              user.status === "Active"
                                ? "default"
                                : user.status === "Pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {user.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-muted-foreground">{user.joined}</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="w-4 h-4" />
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

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Security & Compliance</h2>
              <p className="text-muted-foreground">Monitor security events and compliance status</p>
            </div>
            <Button variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              Security Report
            </Button>
          </div>

          {/* Security Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Security Score</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">94/100</div>
                <p className="text-sm text-muted-foreground mt-1">Excellent security posture</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Failed Login Attempts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">23</div>
                <p className="text-sm text-muted-foreground mt-1">Last 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,423</div>
                <p className="text-sm text-green-600 mt-1">All verified</p>
              </CardContent>
            </Card>
          </div>

          {/* Security Events */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <div>
                      <p className="text-sm font-medium">Multiple failed login attempts</p>
                      <p className="text-xs text-muted-foreground">IP: 192.168.1.100 • 15 attempts</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                    <Button size="sm" variant="outline">
                      Block IP
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">SSL certificate renewed</p>
                      <p className="text-xs text-muted-foreground">Valid until: 2024-10-27</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
