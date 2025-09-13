"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  hint: string
  difficulty: "Easy" | "Medium" | "Hard"
}

const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary function of chlorophyll in photosynthesis?",
    options: [
      "Absorbing sunlight energy",
      "Releasing oxygen",
      "Converting water to glucose",
      "Storing chemical energy",
    ],
    correctAnswer: 0,
    hint: "Chlorophyll is the green pigment that captures light energy from the sun.",
    difficulty: "Medium",
  },
  {
    id: 2,
    question: "What is the largest organ in the human body responsible for detoxification and metabolism?",
    options: ["Brain", "Heart", "Liver", "Lungs"],
    correctAnswer: 2,
    hint: "This organ plays a crucial role in filtering blood and producing bile, a key component in digestion. It is also the largest internal organ.",
    difficulty: "Medium",
  },
  {
    id: 3,
    question: "Which mathematical operation is performed first in the expression: 2 + 3 × 4?",
    options: ["Addition", "Multiplication", "Both simultaneously", "Left to right order"],
    correctAnswer: 1,
    hint: "Remember the order of operations: PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction).",
    difficulty: "Easy",
  },
]

export function QuizInterface() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(sampleQuestions.length).fill(null))

  const currentQuestion = sampleQuestions[currentQuestionIndex]
  const totalQuestions = sampleQuestions.length

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answerIndex
    setAnswers(newAnswers)
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(answers[currentQuestionIndex - 1])
      setShowHint(false)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(answers[currentQuestionIndex + 1])
      setShowHint(false)
    }
  }

  const handleSubmitQuiz = () => {
    // Handle quiz submission
    alert("Quiz submitted!")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subjects, chapters, or gai"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              30
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </CardTitle>
            <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
              Difficulty: {currentQuestion.difficulty}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card className="border-2 border-blue-100">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 leading-relaxed">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50 text-blue-900"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"
                    }`}
                  >
                    <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Hint Section */}
          {showHint && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-1">Hint</h4>
                  <p className="text-yellow-700 text-sm">{currentQuestion.hint}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center space-x-2 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </Button>

              <Button variant="outline" onClick={() => setShowHint(!showHint)} className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4" />
                <span>Show Hint</span>
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              {currentQuestionIndex < totalQuestions - 1 ? (
                <Button
                  onClick={handleNextQuestion}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmitQuiz} className="bg-green-600 hover:bg-green-700">
                  Submit Quiz
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Navigation */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center space-x-2">
            {sampleQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestionIndex(index)
                  setSelectedAnswer(answers[index])
                  setShowHint(false)
                }}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                  index === currentQuestionIndex
                    ? "bg-blue-600 text-white"
                    : answers[index] !== null
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-gray-100 text-gray-600 border border-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
