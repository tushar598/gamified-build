"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School, Users, Heart, MessageCircle, Trophy, ArrowRight } from "lucide-react"

export function GrowthMarketing() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Growth & Marketing</h1>
      </div>

      {/* Key Growth Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <School className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <p className="font-semibold">Active Pilot Schools</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <div className="text-3xl font-bold text-green-600 mb-2">2,000+</div>
            <p className="font-semibold">Teacher Ambassadors</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Heart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
            <p className="font-semibold">Community Members</p>
          </CardContent>
        </Card>
      </div>

      {/* Our Core Initiatives */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Our Core Initiatives</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <School className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Pilot School Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our pilot program integrates EduWorld into schools, providing resources and support to educators. We
                gather feedback to refine features and tailor content for diverse learning environments.
              </p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Teacher Ambassador Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Empowering educators to become champions of digital learning. Ambassadors receive exclusive training,
                early access to new features, and incentives for sharing best practices.
              </p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>CSR Tie-ups & Partnerships</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Collaborating with corporations and NGOs to bring quality education to underserved communities. Our CSR
                initiatives focus on bridging the digital divide and ensuring equitable access.
              </p>
              <Button variant="outline">Explore Partnerships</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Community & Events */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Community & Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <CardTitle>Vibrant WhatsApp Communities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join our active WhatsApp groups for real-time support, peer learning, and exclusive content. Connect
                with fellow students, teachers, and parents to share insights, ask questions, and celebrate milestones.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                <CardTitle>Seasonal Competitions & Olympiads</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Engage in thrilling seasonal competitions and offline Olympiads designed to challenge critical thinking
                and reward academic excellence. Participate to win exciting prizes, scholarships, and recognition.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6">
          <Button>View Current Events</Button>
        </div>
      </div>

      {/* How You Can Get Involved */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Growth Story!</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you are a school administrator, a passionate educator, or an organization dedicated to improving
            education, there's a place for you in EduWorld Learning's mission. Explore how you can contribute to shaping
            the future of learning.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
