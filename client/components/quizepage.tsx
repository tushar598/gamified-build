"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  hint: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary function of chlorophyll in photosynthesis?",
    options: [
      { id: "A", text: "Absorbing sunlight energy" },
      { id: "B", text: "Releasing oxygen" },
      { id: "C", text: "Converting water to glucose" },
      { id: "D", text: "Storing chemical energy" },
    ],
    correctAnswer: "A",
    hint: "Chlorophyll is the green pigment that captures light energy from the sun.",
    difficulty: "Medium",
  },
  {
    id: 2,
    question: "What is the largest organ in the human body responsible for detoxification and metabolism?",
    options: [
      { id: "A", text: "Brain" },
      { id: "B", text: "Heart" },
      { id: "C", text: "Liver" },
      { id: "D", text: "Lungs" },
    ],
    correctAnswer: "C",
    hint: "This organ filters blood and produces bile. It’s the largest internal organ.",
    difficulty: "Medium",
  },
  {
    id: 3,
    question: "Which mathematical operation is performed first in the expression: 2 + 3 × 4?",
    options: [
      { id: "A", text: "Addition" },
      { id: "B", text: "Multiplication" },
      { id: "C", text: "Both simultaneously" },
      { id: "D", text: "Left to right order" },
    ],
    correctAnswer: "B",
    hint: "Remember PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.",
    difficulty: "Easy",
  },
];

const QuizInterface = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    new Array(sampleQuestions.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const totalQuestions = sampleQuestions.length;

  const handleAnswerSelect = (answerId: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerId;
    setAnswers(newAnswers);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowHint(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowHint(false);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    sampleQuestions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) score++;
    });
    alert(`Quiz submitted! You scored ${score} / ${totalQuestions}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Hard":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Interactive Quiz
          </h1>
          <span
            className={`px-3 py-1 rounded-lg text-sm font-medium border ${getDifficultyColor(
              currentQuestion.difficulty
            )}`}
          >
            {currentQuestion.difficulty}
          </span>
        </div>

        {/* Question Section */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>

          <p className="text-lg font-medium text-gray-900 mb-6">
            {currentQuestion.question}
          </p>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestionIndex] === option.id
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className="font-medium text-gray-700">
                  {option.id}. {option.text}
                </span>
              </button>
            ))}
          </div>

          {/* Hint Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-3"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>

            {showHint && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-yellow-700 text-sm">{currentQuestion.hint}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center text-gray-600 hover:text-gray-800 font-medium disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            <div className="flex space-x-3">
              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>

          {/* Question Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {sampleQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setShowHint(false);
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
        </div>
      </div>
    </div>
  );
}


export default QuizInterface 