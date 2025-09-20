"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Building } from "lucide-react"

const cosmeticItems = [
  {
    name: "Astro Explorer Suit",
    price: "150 Gems",
    image: "/astronaut-suit.jpg",
  },
  {
    name: "Mystic Forest Theme",
    price: "200 Gems",
    image: "/mystical-forest-theme.jpg",
  },
  {
    name: "Digital Wizard Staff",
    price: "100 Gems",
    image: "/digital-wizard-staff.jpg",
  },
  {
    name: "Ocean Depths Avatar",
    price: "180 Gems",
    image: "/ocean-depths-avatar.jpg",
  },
]

export function MonetizationOverview() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Monetization Overview</h1>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Empowering Education Through Smart Models</h2>
          <p className="text-lg text-muted-foreground">
            EduWorld Learning offers a balanced approach to access high-quality education: core content is free, while
            premium features and advanced tools are available through flexible subscription plans and in-app
            enhancements.
          </p>
          <Button className="mt-4" size="lg">
            Explore All Plans
          </Button>
        </div>
      </div>

      {/* Core Content & Premium Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Freemium Core Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <span>Access to all foundational subject worlds (Math, Science, English, History)</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <span>Thousands of interactive chapters and levels</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <span>Unlimited micro-games for learning objectives</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <span>Basic quizzes with hints and adaptive difficulty</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <span>Basic performance tracking and progress reports</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full bg-transparent">
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Paid Advanced Analytics & Diagnostics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>In-depth student performance analytics and mastery maps</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Personalized learning path recommendations</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>AI-driven diagnostic reports to identify learning gaps</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Teacher dashboards with class heatmaps and comparative insights</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Parent digests with detailed weekly progress and growth areas</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Dedicated support and priority feature requests</span>
              </li>
            </ul>
            <Button className="w-full">Unlock Premium</Button>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Options */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Subscription Options</h2>
        <p className="text-center text-muted-foreground mb-8">Choose the plan that best fits your learning journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Learner */}
          <Card className="relative">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-blue-500" />
                <CardTitle>Basic Learner</CardTitle>
              </div>
              <div className="text-3xl font-bold">
                $9.99<span className="text-lg font-normal">/month</span>
              </div>
              <CardDescription>Ideal for individual students focusing on core subjects.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">All Freemium features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Access to premium chapter content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Ad-free learning experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Priority support for technical issues</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">5 exclusive cosmetic items per month</span>
                </li>
              </ul>
              <Button className="w-full">Select Plan</Button>
            </CardContent>
          </Card>

          {/* Pro Educator */}
          <Card className="relative border-blue-500 border-2">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500">Most Popular</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-500" />
                <CardTitle>Pro Educator</CardTitle>
              </div>
              <div className="text-3xl font-bold">
                $24.99<span className="text-lg font-normal">/month</span>
              </div>
              <CardDescription>Designed for teachers and power users seeking deeper insights.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">All Basic Learner features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Advanced analytics & diagnostics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Teacher dashboard access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Curriculum customization tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">API access for educational integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">20 exclusive cosmetic items per month</span>
                </li>
              </ul>
              <Button className="w-full">Select Plan</Button>
            </CardContent>
          </Card>

          {/* Institutional Partner */}
          <Card className="relative">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-purple-500" />
                <CardTitle>Institutional Partner</CardTitle>
              </div>
              <div className="text-3xl font-bold">Custom Quote</div>
              <CardDescription>
                Tailored solutions for schools, districts, and educational organizations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">All Pro Educator features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Multi-user management & bulk licensing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Custom branding options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">On-site teacher training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Access to beta features</span>
                </li>
              </ul>
              <Button className="w-full">Select Plan</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* In-App Cosmetics */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">In-App Cosmetics</h2>
        <p className="text-center text-muted-foreground mb-8">
          Personalize your learning experience with unique avatar outfits and world themes!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cosmeticItems.map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-20 h-20 mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <p className="text-blue-600 font-bold mb-3">{item.price}</p>
                <Button variant="outline" size="sm">
                  View Item
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* NGO & State Partnerships */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">NGO & State Partnerships</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            EduWorld Learning collaborates with non-governmental organizations and state educational bodies to provide
            equitable access to quality learning resources, reaching underserved communities globally.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
