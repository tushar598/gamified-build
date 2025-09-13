"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const userEngagementData = [
  { name: "Jan", dailyActive: 1800, weeklyActive: 6500 },
  { name: "Feb", dailyActive: 1900, weeklyActive: 6800 },
  { name: "Mar", dailyActive: 2000, weeklyActive: 7000 },
  { name: "Apr", dailyActive: 1950, weeklyActive: 7200 },
  { name: "May", dailyActive: 2050, weeklyActive: 7400 },
  { name: "Jun", dailyActive: 2080, weeklyActive: 7450 },
  { name: "Jul", dailyActive: 2100, weeklyActive: 7500 },
]

const retentionData = [
  { name: "Jan", retention: 75, mastery: 78 },
  { name: "Feb", retention: 78, mastery: 79 },
  { name: "Mar", retention: 80, mastery: 80 },
  { name: "Apr", retention: 82, mastery: 81 },
  { name: "May", retention: 85, mastery: 81 },
  { name: "Jun", retention: 87, mastery: 81 },
  { name: "Jul", retention: 88, mastery: 81 },
]

const subjectMasteryData = [
  { subject: "Math", mastery: 85 },
  { subject: "Science", mastery: 78 },
  { subject: "History", mastery: 72 },
  { subject: "English", mastery: 80 },
  { subject: "Coding", mastery: 68 },
]

const teacherEngagementData = [
  { name: "Active Teachers", value: 45, color: "#3b82f6" },
  { name: "Trial Teachers", value: 30, color: "#10b981" },
  { name: "Inactive Teachers", value: 25, color: "#6b7280" },
]

const abTestData = [
  {
    experiment: "Quiz Interface Redesign",
    variantA: "Old UI",
    variantB: "New UI",
    metric: "Quiz Completion Rate",
    lift: "+5.2%",
    significance: "p < 0.01",
  },
  {
    experiment: "Gamified XP System",
    variantA: "No XP",
    variantB: "XP Enabled",
    metric: "Daily Engagement",
    lift: "+8.1%",
    significance: "p < 0.001",
  },
  {
    experiment: "Chapter Navigation Flow",
    variantA: "Linear Path",
    variantB: "Branching Path",
    metric: "Time to Mastery",
    lift: "-2.3%",
    significance: "p = 0.15",
  },
  {
    experiment: "Hint System Revamp",
    variantA: "Basic Hints",
    variantB: "Adaptive Hints",
    metric: "Quiz Pass Rate",
    lift: "+3.8%",
    significance: "p < 0.05",
  },
  {
    experiment: "Mobile Learning Module",
    variantA: "Web View",
    variantB: "Responsive Design",
    metric: "Mobile Session Duration",
    lift: "+6.5%",
    significance: "p < 0.01",
  },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Data Up-to-Date: All metrics are updated as of July 28, 2024, 10:30 AM. Real-time data processing is active.
          </p>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,100</div>
            <p className="text-xs text-green-600 mt-1">+12.5% vs. previous period</p>
            <p className="text-xs text-muted-foreground">Last 30 Days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Weekly Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,500</div>
            <p className="text-xs text-green-600 mt-1">+9.2% vs. previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Student Mastery Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">81.2%</div>
            <p className="text-xs text-green-600 mt-1">+3.1% vs. previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Teacher Adoption Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-green-600 mt-1">+2.8% vs. previous period</p>
          </CardContent>
        </Card>
      </div>

      {/* Engagement & Learning Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Engagement Trend</CardTitle>
            <CardDescription>Daily and Weekly Active Users over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userEngagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="dailyActive" stroke="#3b82f6" name="Daily Active Users" />
                <Line type="monotone" dataKey="weeklyActive" stroke="#10b981" name="Weekly Active Users" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Retention & Mastery Progression</CardTitle>
            <CardDescription>Student retention rate and average mastery scores.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                  name="Retention Rate"
                />
                <Area
                  type="monotone"
                  dataKey="mastery"
                  stackId="2"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  name="Avg. Mastery Score"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance & Teacher Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mastery Rate by Subject</CardTitle>
            <CardDescription>Average mastery percentage across different subjects.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectMasteryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="mastery" fill="#3b82f6" name="Mastery Rate" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teacher Engagement Overview</CardTitle>
            <CardDescription>Distribution of teachers by engagement status.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={teacherEngagementData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {teacherEngagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* A/B Testing Results */}
      <Card>
        <CardHeader>
          <CardTitle>A/B Testing Results</CardTitle>
          <CardDescription>
            Recent A/B Test Campaigns - Performance comparison for recent feature rollouts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Experiment</th>
                  <th className="text-left p-2">Variant A</th>
                  <th className="text-left p-2">Variant B</th>
                  <th className="text-left p-2">Key Metric</th>
                  <th className="text-left p-2">Lift (%)</th>
                  <th className="text-left p-2">Significance</th>
                </tr>
              </thead>
              <tbody>
                {abTestData.map((test, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 font-medium">{test.experiment}</td>
                    <td className="p-2 text-muted-foreground">{test.variantA}</td>
                    <td className="p-2 text-muted-foreground">{test.variantB}</td>
                    <td className="p-2">{test.metric}</td>
                    <td className="p-2">
                      <Badge variant={test.lift.startsWith("+") ? "default" : "secondary"}>{test.lift}</Badge>
                    </td>
                    <td className="p-2 text-sm text-muted-foreground">{test.significance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* System Health Indicators */}
      <Card>
        <CardHeader>
          <CardTitle>System Health Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Minified JS: Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Minified CSS: Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">CDN Status: Optimal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Offline Caching: Enabled</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
