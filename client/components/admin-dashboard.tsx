"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  TrendingUp,
  Award,
  Flame,
  Trophy,
  Lightbulb,
} from "lucide-react";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const quizzes = [
    {
      title: "Algebra Basics",
      subject: "Mathematics",
      questions: 15,
      status: "Active",
    },
    {
      title: "Planetary Systems",
      subject: "Science",
      questions: 10,
      status: "Draft",
    },
    {
      title: "World War I Causes",
      subject: "History",
      questions: 20,
      status: "Active",
    },
    {
      title: "Literary Devices",
      subject: "English",
      questions: 12,
      status: "Active",
    },
    {
      title: "Chemical Reactions",
      subject: "Science",
      questions: 18,
      status: "Draft",
    },
  ];

  const assets = [
    { name: "Math World Chapter 1", language: "English", type: "Chapter" },
    { name: "Science World Intro", language: "Spanish", type: "Introduction" },
    { name: "History Overview Guide", language: "French", type: "Guide" },
  ];

  const recentUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      status: "Active",
      joined: "2023-10-27",
      role: "Student",
    },
    {
      name: "Mike Chen",
      email: "mike.chen@email.com",
      status: "Pending",
      joined: "2023-10-26",
      role: "Teacher",
    },
    {
      name: "Emma Davis",
      email: "emma.d@email.com",
      status: "Active",
      joined: "2023-10-25",
      role: "Student",
    },
    {
      name: "Alex Rodriguez",
      email: "alex.r@email.com",
      status: "Suspended",
      joined: "2023-10-24",
      role: "Student",
    },
  ];

  const systemAlerts = [
    {
      type: "warning",
      message: "High memory usage detected on server cluster 2",
      time: "5 min ago",
    },
    {
      type: "info",
      message: "Scheduled maintenance completed successfully",
      time: "2 hours ago",
    },
    {
      type: "error",
      message: "Failed login attempts from IP 192.168.1.100",
      time: "3 hours ago",
    },
    {
      type: "success",
      message: "Database backup completed",
      time: "6 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Comprehensive system management and monitoring
            </p>
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
            <Button variant="outline" className="border-gray-300">
              <Bell className="w-4 h-4 mr-2" />
              Alerts (3)
            </Button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200 rounded-lg p-1">
            <TabsTrigger
              value="overview"
              className="rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
            >
              Content
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
            >
              Users
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="system"
              className="rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
            >
              System
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">12,847</div>
                  <p className="text-xs text-green-600 mt-1">
                    +8.2% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Active Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">1,423</div>
                  <p className="text-xs text-green-600 mt-1">
                    +12.5% from yesterday
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    System Uptime
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <p className="text-xs text-gray-600 mt-1">Last 30 days</p>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Revenue (MTD)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    $24,680
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    +15.3% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Recent User Registrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentUsers.map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {user.email} • {user.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={
                              user.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : user.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {user.status}
                          </Badge>
                          <p className="text-xs text-gray-600 mt-1">
                            {user.joined}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemAlerts.map((alert, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg"
                      >
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
                          <p className="text-sm text-gray-900">
                            {alert.message}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {alert.time}
                          </p>
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
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Upload New Quiz
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Add new quizzes by providing details and uploading quiz
                    data.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quiz-title" className="text-gray-900">
                      Quiz Title
                    </Label>
                    <Input
                      id="quiz-title"
                      placeholder="e.g., Advanced Calculus"
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-subject" className="text-gray-900">
                      Subject
                    </Label>
                    <Input
                      id="quiz-subject"
                      placeholder="e.g., Mathematics"
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-description" className="text-gray-900">
                      Description
                    </Label>
                    <Textarea
                      id="quiz-description"
                      placeholder="Briefly describe the quiz content and objectives."
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiz-file" className="text-gray-900">
                      Quiz Data File (JSON/CSV)
                    </Label>
                    <Input
                      id="quiz-file"
                      type="file"
                      accept=".json,.csv"
                      className="border-gray-300"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Quiz
                  </Button>
                </CardContent>
              </Card>

              {/* Asset Management */}
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Asset Management
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Edit, delete, and organize multilingual content assets.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {assets.map((asset, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {asset.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {asset.language} • {asset.type}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-300"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-gray-300"
                  >
                    Add New Asset
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Manage Existing Quizzes */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Manage Existing Quizzes
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Edit or delete quizzes from the platform.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Title
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Subject
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Questions
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizzes.map((quiz, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-3 px-4 text-gray-900">
                            {quiz.title}
                          </td>
                          <td className="py-3 px-4 text-gray-900">
                            {quiz.subject}
                          </td>
                          <td className="py-3 px-4 text-gray-900">
                            {quiz.questions}
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              className={
                                quiz.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }
                            >
                              {quiz.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-300"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-300"
                              >
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

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  User Management
                </h2>
                <p className="text-gray-600">
                  Manage user accounts, roles, and permissions
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-300">
                  <Download className="w-4 h-4 mr-2" />
                  Export Users
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <UserCheck className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            {/* User Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold text-gray-900">12,847</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Active Users</p>
                      <p className="text-2xl font-bold text-gray-900">11,203</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="text-sm text-gray-600">Pending</p>
                      <p className="text-2xl font-bold text-gray-900">1,244</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <UserX className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600">Suspended</p>
                      <p className="text-2xl font-bold text-gray-900">400</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Management Tools */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  User Management Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Search users by name, email, or ID"
                    className="flex-1 border-gray-300"
                  />
                  <Select>
                    <SelectTrigger className="w-48 border-gray-300">
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
                    <SelectTrigger className="w-48 border-gray-300">
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
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-medium text-gray-900">
                          User
                        </th>
                        <th className="text-left p-3 font-medium text-gray-900">
                          Role
                        </th>
                        <th className="text-left p-3 font-medium text-gray-900">
                          Status
                        </th>
                        <th className="text-left p-3 font-medium text-gray-900">
                          Last Active
                        </th>
                        <th className="text-left p-3 font-medium text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="p-3">
                            <div>
                              <p className="font-medium text-gray-900">
                                {user.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {user.email}
                              </p>
                            </div>
                          </td>
                          <td className="p-3 text-gray-900">{user.role}</td>
                          <td className="p-3">
                            <Badge
                              className={
                                user.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : user.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-3 text-gray-600">{user.joined}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-300"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-300"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-300"
                              >
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

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Platform Analytics
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Monitor user engagement and platform performance metrics.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">
                      Daily Active Users
                    </p>
                    <p className="text-2xl font-bold text-gray-900">1,423</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Weekly Growth</p>
                    <p className="text-2xl font-bold text-gray-900">+12.5%</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Completion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">78%</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Engagement Metrics
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">
                          Average Session Duration
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          12.4 min
                        </span>
                      </div>
                      <Progress value={72} className="h-2 bg-gray-200" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">
                          Quiz Completion Rate
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          84%
                        </span>
                      </div>
                      <Progress value={84} className="h-2 bg-gray-200" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">
                          User Retention (30d)
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          67%
                        </span>
                      </div>
                      <Progress value={67} className="h-2 bg-gray-200" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  System Health & Monitoring
                </h2>
                <p className="text-gray-600">
                  Real-time system performance and infrastructure status
                </p>
              </div>
              <Button variant="outline" className="border-gray-300">
                <Download className="w-4 h-4 mr-2" />
                Export Logs
              </Button>
            </div>

            {/* System Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Server className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-600">Server Status</p>
                        <p className="font-semibold text-green-600">
                          Operational
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-600">Database</p>
                        <p className="font-semibold text-green-600">Healthy</p>
                      </div>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-600">CDN Status</p>
                        <p className="font-semibold text-green-600">Optimal</p>
                      </div>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="text-sm text-gray-600">API Response</p>
                        <p className="font-semibold text-yellow-600">
                          125ms avg
                        </p>
                      </div>
                    </div>
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resource Usage */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Resource Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      CPU Usage
                    </span>
                    <span className="text-sm text-gray-600">68%</span>
                  </div>
                  <Progress value={68} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Memory Usage
                    </span>
                    <span className="text-sm text-gray-600">72%</span>
                  </div>
                  <Progress value={72} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Disk Usage
                    </span>
                    <span className="text-sm text-gray-600">45%</span>
                  </div>
                  <Progress value={45} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Network I/O
                    </span>
                    <span className="text-sm text-gray-600">32%</span>
                  </div>
                  <Progress value={32} className="h-2 bg-gray-200" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
