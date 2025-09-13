"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MobileQuizInterface() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)

  const question = {
    title: "Foundation Quiz",
    questionNumber: 1,
    question: "What is the primary function of chlorophyll in photosynthesis?",
    options: [
      "Absorbing sunlight energy",
      "Releasing oxygen",
      "Converting water to glucose",
      "Storing chemical energy",
    ],
    correctAnswer: 0,
    hint: "Chlorophyll is the green pigment that captures light energy from the sun.",
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between mb-6 text-sm font-medium">
        <span>9:41</span>
      </div>

      {/* Quiz Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{question.title}</h1>
        <p className="text-gray-600">Question {question.questionNumber}</p>
      </div>

      {/* Question Card */}
      <Card className="mb-6 shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-gray-900 leading-relaxed">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50 text-blue-900"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <Button
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium"
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </Button>

            <Button variant="outline" onClick={() => setShowHint(!showHint)} className="w-full h-12 border-gray-300">
              Get Hint
            </Button>
          </div>

          {/* Hint Section */}
          {showHint && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="text-yellow-800 text-sm">{question.hint}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Worlds</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Gamify</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-blue-600">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <span className="text-xs">Dashboard</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs">Admin</span>
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8 pb-20">Made with Visily</div>
    </div>
  )
}
