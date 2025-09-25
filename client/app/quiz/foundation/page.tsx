'use client';

import { useState } from 'react';

export default function QuizPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the largest organ in the human body responsible for detoxification and metabolism?",
      options: [
        { id: "A", text: "Brain" },
        { id: "B", text: "Heart" },
        { id: "C", text: "Liver" },
        { id: "D", text: "Lungs" }
      ],
      correctAnswer: "C",
      hint: "This organ plays a crucial role in filtering blood and producing bile, a key component in digestion. It is also the largest internal organ."
    }
  ];

  const currentQuestion = questions[0];

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Human Anatomy Quiz
          </h1>
        </div>

        {/* Question Section */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {currentQuestion.question}
            </h2>
            
            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === option.id
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <span className="font-medium text-gray-700">
                    {option.id}. {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Hint Section */}
          <div className="mb-8">
            <button
              onClick={toggleHint}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-3"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Show Hint
            </button>
            
            {showHint && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-yellow-700 text-sm">{currentQuestion.hint}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <button className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">
              Previous Question
            </button>
            
            <div className="flex space-x-3">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Next Question
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}