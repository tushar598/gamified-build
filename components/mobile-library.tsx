"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Download, Clock, Star, Play, CheckCircle, Bookmark } from "lucide-react"

export function MobileLibrary() {
  const [selectedTab, setSelectedTab] = useState("downloaded")

  const downloadedContent = [
    {
      title: "Algebra Fundamentals",
      subject: "Mathematics",
      progress: 75,
      duration: "2h 30m",
      rating: 4.8,
      size: "45 MB",
      lastAccessed: "2 days ago",
    },
    {
      title: "Cell Biology Basics",
      subject: "Science",
      progress: 100,
      duration: "1h 45m",
      rating: 4.9,
      size: "32 MB",
      lastAccessed: "1 week ago",
    },
    {
      title: "World War I History",
      subject: "History",
      progress: 30,
      duration: "3h 15m",
      rating: 4.7,
      size: "67 MB",
      lastAccessed: "3 days ago",
    },
  ]

  const bookmarkedContent = [
    {
      title: "Advanced Calculus",
      subject: "Mathematics",
      type: "Chapter",
      duration: "45 min",
      rating: 4.9,
    },
    {
      title: "Organic Chemistry Lab",
      subject: "Science",
      type: "Interactive",
      duration: "1h 20m",
      rating: 4.8,
    },
  ]

  const tabs = [
    { id: "downloaded", label: "Downloaded" },
    { id: "bookmarks", label: "Bookmarks" },
    { id: "recent", label: "Recent" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Library</h1>
          <p className="text-muted-foreground">Access your saved content offline</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Sync
        </Button>
      </div>

      {/* Storage Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Storage Used</span>
            <span className="text-sm text-muted-foreground">144 MB / 500 MB</span>
          </div>
          <Progress value={29} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">356 MB available</p>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={selectedTab === tab.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTab(tab.id)}
            className="flex-1"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Downloaded Content */}
      {selectedTab === "downloaded" && (
        <div className="space-y-4">
          {downloadedContent.map((content, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{content.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.subject}</p>

                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{content.progress}%</span>
                      </div>
                      <Progress value={content.progress} className="h-1" />
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{content.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{content.rating}</span>
                        </div>
                        <span>{content.size}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="w-3 h-3 mr-1" />
                        Continue
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground mt-2">Last accessed: {content.lastAccessed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Bookmarked Content */}
      {selectedTab === "bookmarks" && (
        <div className="space-y-4">
          {bookmarkedContent.map((content, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bookmark className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{content.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.subject}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{content.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{content.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {content.type}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Recent Content */}
      {selectedTab === "recent" && (
        <div className="text-center py-8">
          <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="font-medium text-gray-900 mb-2">No Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Your recently accessed content will appear here</p>
        </div>
      )}
    </div>
  )
}
