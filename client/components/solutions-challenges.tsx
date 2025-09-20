"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, RefreshCw, GraduationCap, Users, Shuffle, Shield, Eye, Lock } from "lucide-react"

const solutions = [
  {
    icon: Wifi,
    title: "Offline-First Architecture",
    description:
      "EduWorld provides a robust offline-first experience, allowing learning to continue uninterrupted even without internet access. Progress syncs automatically when online.",
    color: "text-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Seamless Data Synchronization",
    description:
      "All learning progress, achievements, and settings are securely synchronized across devices and stored in the cloud, ensuring data integrity and accessibility.",
    color: "text-green-600",
  },
  {
    icon: GraduationCap,
    title: "Intuitive Teacher Onboarding",
    description:
      "Comprehensive UX-driven guides and interactive tutorials help teachers quickly get up to speed with platform features, content creation, and class management tools.",
    color: "text-purple-600",
  },
  {
    icon: Users,
    title: "Dedicated Teacher Community",
    description:
      "Access a vibrant community forum, webinars, and dedicated support channels where educators can share best practices and get assistance.",
    color: "text-orange-600",
  },
  {
    icon: Shuffle,
    title: "Dynamic Question Generation",
    description:
      "Quizzes feature randomized questions from extensive banks and adaptive difficulty, ensuring unique assessment experiences for every student and reducing cheating.",
    color: "text-cyan-600",
  },
  {
    icon: Shield,
    title: "Proactive Moderation & AI",
    description:
      "Our platform employs intelligent algorithms and human moderation to detect and prevent academic dishonesty, maintaining a fair and equitable learning environment.",
    color: "text-red-600",
  },
  {
    icon: Eye,
    title: "Privacy by Design Principles",
    description:
      "User data is handled with the utmost care, adhering to strict 'Privacy by Design' principles, ensuring data minimization, transparency, and user consent at every step.",
    color: "text-indigo-600",
  },
  {
    icon: Lock,
    title: "Secure Data Encryption",
    description:
      "All sensitive data is protected with industry-standard encryption protocols, both in transit and at rest, safeguarding personal information and academic records.",
    color: "text-pink-600",
  },
]

export function SolutionsChallenges() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Challenges & Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore how EduWorld Learning tackles common challenges with robust features, ensuring a seamless and secure
          educational journey for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => {
          const IconComponent = solution.icon
          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-100 ${solution.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Additional Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Real-time Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Comprehensive analytics dashboard providing insights into student performance, engagement patterns, and
                learning outcomes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Adaptive Learning Paths</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                AI-powered personalization that adapts content difficulty and learning paths based on individual student
                progress and preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Multi-language Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Platform supports multiple languages and localized content to serve diverse global communities and
                educational systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Security & Compliance */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Security & Compliance</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            EduWorld Learning is committed to maintaining the highest standards of security and privacy. Our platform is
            designed with enterprise-grade security measures and complies with international data protection
            regulations.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary">GDPR Compliant</Badge>
            <Badge variant="secondary">COPPA Certified</Badge>
            <Badge variant="secondary">SOC 2 Type II</Badge>
            <Badge variant="secondary">ISO 27001</Badge>
            <Badge variant="secondary">FERPA Compliant</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
