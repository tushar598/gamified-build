"use client";

import { useParams } from "next/navigation";

export default function WorldErrorPage() {
  const { world } = useParams();

  const routeMessages: Record<string, { title: string; message: string }> = {
    "math-world": {
      title: "Math World",
      message:
        "Enter the Realm of Numbers – where puzzles unlock hidden powers.",
    },
    "science-world": {
      title: "Science World",
      message:
        "Step into the Lab of Wonders – discover the magic of experiments.",
    },
    "history-world": {
      title: "History World",
      message:
        "Travel through Time – conquer quests across ancient civilizations.",
    },
    "english-world": {
      title: "English World",
      message:
        "Master the Land of Words– craft stories, solve riddles, and level up.",
    },
  };

  const data = routeMessages[world as string] || {
    title: "Unknown World",
    message: "This page does not exist.",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 text-center px-6 font-sans">
      <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
      <p className="text-base mb-2">{data.message}</p>
      <p className="text-sm text-gray-600">Coming Soon…</p>
    </div>
  );
}
