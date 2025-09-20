"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { CheckCircle, Upload, Download, Wifi } from "lucide-react"

const syncHealthData = [
  { day: "Day 1", success: 180, failed: 5 },
  { day: "Day 2", success: 175, failed: 8 },
  { day: "Day 3", success: 185, failed: 3 },
  { day: "Day 4", success: 190, failed: 2 },
  { day: "Day 5", success: 188, failed: 4 },
  { day: "Day 6", success: 192, failed: 1 },
  { day: "Day 7", success: 195, failed: 2 },
]

const recentSyncActivities = [
  {
    timestamp: "2023-10-27 10:15 AM",
    operation: "Upload",
    status: "Success",
    dataAffected: "Quiz Score (Math World)",
    icon: Upload,
  },
  {
    timestamp: "2023-10-27 10:10 AM",
    operation: "Download",
    status: "Success",
    dataAffected: "New Lesson Content (Science)",
    icon: Download,
  },
  {
    timestamp: "2023-10-27 09:55 AM",
    operation: "Upload",
    status: "Pending",
    dataAffected: "User Settings Update",
    icon: Upload,
  },
  {
    timestamp: "2023-10-27 09:40 AM",
    operation: "Download",
    status: "Success",
    dataAffected: "Chapter Progress Sync",
    icon: Download,
  },
]

export function OfflineArchitectureStatus() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Offline-First Architecture Status</h1>
        </div>
      </div>

      {/* Overall System Health */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Overall System Health</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Badge variant="default" className="bg-green-500">
              Operational
            </Badge>
            <span className="text-muted-foreground">
              All offline services are running smoothly with optimal performance.
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Service Worker Status & Cached Assets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Worker Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Status:</p>
                <Badge variant="default" className="bg-green-500">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Version:</p>
                <p className="font-mono text-sm">v1.2.0</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Scope:</p>
                <p className="font-mono text-sm">/eduworld/</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Registered On:</p>
                <p className="text-sm">2023-10-26 09:30 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cached Offline Assets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Size:</p>
                <p className="text-2xl font-bold">150 MB</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Number of Files:</p>
                <p className="text-2xl font-bold">785</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Storage Used</p>
              <Progress value={60} className="w-full" />
              <p className="text-xs text-muted-foreground mt-1">60% of available storage</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Breakdown by Type:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Images:</span>
                  <span>80 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Scripts:</span>
                  <span>40 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Styles:</span>
                  <span>20 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Fonts:</span>
                  <span>10 MB</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Local Event Logging & Queued Cloud Sync */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Local Event Logging</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Logging Status:</p>
                <Badge variant="default" className="bg-green-500">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Queued Events:</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Logged Event:</p>
              <p className="text-sm">2023-10-27 10:15 AM (User Quiz Attempt)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Queued Cloud Sync</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Uploads:</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Last Sync Time:</p>
                <p className="text-sm">2023-10-27 10:10 AM</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Connection Status:</p>
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-green-500" />
                <Badge variant="default" className="bg-green-500">
                  Online
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CDN Delivery Indicators */}
      <Card>
        <CardHeader>
          <CardTitle>CDN Delivery Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Average Latency</p>
              <p className="text-2xl font-bold">45 ms</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Cache Hit Ratio</p>
              <p className="text-2xl font-bold">98.5%</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Primary Region</p>
              <p className="text-sm font-semibold">North America (US-East)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Operations</p>
              <div className="flex items-center justify-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold">Optimal</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Sync Health */}
      <Card>
        <CardHeader>
          <CardTitle>Data Sync Health (Last 7 Days)</CardTitle>
          <CardDescription>Synchronization success and failure rates over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={syncHealthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="success" fill="#10b981" name="Success" />
              <Bar dataKey="failed" fill="#ef4444" name="Failed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Sync Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sync Activities</CardTitle>
          <CardDescription>Latest synchronization events between local and cloud storage.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Timestamp</th>
                  <th className="text-left p-3">Operation</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Data Affected</th>
                </tr>
              </thead>
              <tbody>
                {recentSyncActivities.map((activity, index) => {
                  const IconComponent = activity.icon
                  return (
                    <tr key={index} className="border-b">
                      <td className="p-3 text-sm">{activity.timestamp}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm">{activity.operation}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge
                          variant={
                            activity.status === "Success"
                              ? "default"
                              : activity.status === "Pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            activity.status === "Success"
                              ? "bg-green-500"
                              : activity.status === "Pending"
                                ? "bg-yellow-500"
                                : ""
                          }
                        >
                          {activity.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">{activity.dataAffected}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Offline Mode Indicator */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wifi className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Offline-First Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Your learning continues seamlessly even without internet connection
                </p>
              </div>
            </div>
            <Badge variant="default" className="bg-blue-500">
              Enabled
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
