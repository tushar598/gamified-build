"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, Users, BarChart3, Settings, FileText, AlertTriangle, CheckCircle } from "lucide-react"

export function MobileAdminPanel() {
  const systemStatus = [
    { label: "Server Status", status: "Operational", color: "green" },
    { label: "Database", status: "Healthy", color: "green" },
    { label: "CDN", status: "Optimal", color: "green" },
    { label: "API Response", status: "125ms avg", color: "yellow" },
  ]

  const recentActivity = [
    { action: "New user registered", user: "Sarah Johnson", time: "5 min ago" },
    { action: "Quiz uploaded", user: "Admin", time: "15 min ago" },
    { action: "Content updated", user: "Mike Chen", time: "1 hour ago" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-muted-foreground">Mobile administration dashboard</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">12,847</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BarChart3 className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">1,423</div>
            <div className="text-sm text-muted-foreground">Active Sessions</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Quick Upload</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Quiz title" />
          <Textarea placeholder="Brief description" rows={3} />
          <Input type="file" accept=".json,.csv" />
          <Button className="w-full">
            <Upload className="w-4 h-4 mr-2" />
            Upload Quiz
          </Button>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>System Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {systemStatus.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                {item.color === "green" ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                )}
                <span className="text-sm">{item.label}</span>
              </div>
              <Badge
                variant={item.color === "green" ? "default" : "secondary"}
                className={item.color === "green" ? "bg-green-500" : "bg-yellow-500"}
              >
                {item.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-muted-foreground">by {activity.user}</p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
          <Users className="w-6 h-6" />
          <span className="text-sm">Manage Users</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent">
          <BarChart3 className="w-6 h-6" />
          <span className="text-sm">View Analytics</span>
        </Button>
      </div>
    </div>
  )
}
