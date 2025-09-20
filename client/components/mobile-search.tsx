"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, Video, FileText, Clock, Star } from "lucide-react"

export function MobileSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const recentSearches = ["Algebra", "Photosynthesis", "World War II", "Shakespeare"]

  const searchResults = [
    {
      title: "Introduction to Algebra",
      type: "Chapter",
      subject: "Mathematics",
      duration: "15 min",
      rating: 4.8,
      icon: BookOpen,
    },
    {
      title: "Solving Linear Equations",
      type: "Video",
      subject: "Mathematics",
      duration: "8 min",
      rating: 4.9,
      icon: Video,
    },
    {
      title: "Algebra Practice Quiz",
      type: "Quiz",
      subject: "Mathematics",
      duration: "12 min",
      rating: 4.7,
      icon: FileText,
    },
  ]

  const filters = [
    { id: "all", label: "All" },
    { id: "chapters", label: "Chapters" },
    { id: "videos", label: "Videos" },
    { id: "quizzes", label: "Quizzes" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Search Header */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for topics, chapters, or quizzes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-12"
          />
          <Button size="sm" variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className="whitespace-nowrap"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Recent Searches */}
      {!searchQuery && (
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Recent Searches</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => setSearchQuery(search)}
                >
                  {search}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Search Results</h3>
            <span className="text-sm text-muted-foreground">{searchResults.length} results</span>
          </div>

          {searchResults.map((result, index) => {
            const IconComponent = result.icon
            return (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{result.title}</h4>
                      <p className="text-sm text-muted-foreground">{result.subject}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-muted-foreground">{result.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-muted-foreground">{result.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {result.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Popular Topics */}
      {!searchQuery && (
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Popular Topics</h3>
            <div className="grid grid-cols-2 gap-3">
              {["Calculus", "Chemistry", "Physics", "Literature"].map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-3 text-left justify-start bg-transparent"
                  onClick={() => setSearchQuery(topic)}
                >
                  <div>
                    <div className="font-medium">{topic}</div>
                    <div className="text-xs text-muted-foreground">25+ lessons</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
