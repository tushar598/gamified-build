"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Award, Globe, ArrowRight } from "lucide-react"

const futureFeatures = [
  {
    icon: Brain,
    title: "AI-Driven Adaptive Learning",
    description:
      "Personalized learning paths that adapt in real-time to student progress and learning styles, offering targeted feedback and resources.",
    image: "/ai-brain-network-connections.jpg",
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: "STEM Metaverse Labs",
    description:
      "Immersive virtual reality environments for hands-on STEM experiments and collaborative projects, making complex concepts tangible.",
    image: "/vr-laboratory-science-experiments.jpg",
    color: "text-purple-600",
  },
  {
    icon: Award,
    title: "Micro-Credentials & Pathways",
    description:
      "Earn verifiable micro-credentials for mastering specific skills, recognized by educational institutions and industries, building clear career pathways.",
    image: "/digital-certificates-career-pathway.jpg",
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Reaching new regions with localized content and partnerships, breaking down educational barriers and fostering a global learning community.",
    image: "/world-globe-education-network.jpg",
    color: "text-orange-600",
  },
]

export function VisionFuture() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Vision: The Future of Learning</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Explore the innovative features and strategic advancements that will shape the next generation of EduWorld
          Learning. We are constantly evolving to provide the most engaging and effective educational experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {futureFeatures.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 p-2 rounded-lg bg-white/90 ${feature.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Innovation Timeline */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Innovation Roadmap</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Q1 2025: AI-Powered Personalization</CardTitle>
                <span className="text-sm text-blue-600 font-semibold">In Development</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Launch of advanced AI algorithms that create truly personalized learning experiences, adapting content
                difficulty, pacing, and teaching methods to individual student needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Q2 2025: Virtual Reality Integration</CardTitle>
                <span className="text-sm text-purple-600 font-semibold">Planning</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Introduction of VR-enabled STEM laboratories where students can conduct virtual experiments, explore
                molecular structures, and experience historical events firsthand.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Q3 2025: Blockchain Credentials</CardTitle>
                <span className="text-sm text-green-600 font-semibold">Research</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implementation of blockchain-based micro-credentials that provide verifiable, tamper-proof certificates
                recognized by educational institutions and employers worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Q4 2025: Global Marketplace</CardTitle>
                <span className="text-sm text-orange-600 font-semibold">Concept</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Launch of a global educational content marketplace where educators worldwide can share, sell, and
                collaborate on educational resources, fostering a truly global learning community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Be Part of the Future</h2>
          <p className="mb-6 opacity-90">
            Join us in revolutionizing education. Whether you're an educator, student, or institution, your feedback and
            participation help shape the future of learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Join Beta Program
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Partner With Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
