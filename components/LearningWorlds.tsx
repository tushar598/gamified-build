"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Lock } from "lucide-react";
import Image from "next/image";

export function LearningWorlds() {
  const worlds = [
    {
      id: 1,
      title: "Math World",
      progress: 75,
      locked: false,
      image: "/math.svg", // replace with actual asset path
    },
    {
      id: 2,
      title: "Science World",
      progress: 40,
      locked: false,
      image: "/art-galaxy-space.jpg",
    },
    {
      id: 3,
      title: "History World",
      progress: 0,
      locked: true,
      image: "/ai-brain-network-connections.jpg",
    },
    {
      id: 4,
      title: "English World",
      progress: 0,
      locked: true,
      image: "/digital-certificates-career-pathway.jpg",
    },
    {
      id: 5,
      title: "Art & Design World",
      progress: 0,
      locked: true,
      image: "/mystical-forest-theme.jpg",
    },
    {
      id: 6,
      title: "Music World",
      progress: 0,
      locked: true,
      image: "/ocean-depths-avatar.jpg",
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className=" p-4 space-y-2">
        <h2 className="text-5xl font-bold text-blue-700">
          Your Learning Worlds
        </h2>
        <p className="text-gray-600 max-w-xl mt-6">
          Dive into exciting subjects, unlock new chapters, and master skills at
          your own pace. Each world holds unique challenges and rewards, waiting
          for you to explore!
        </p>
      </div>

      {/* Worlds Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {worlds.map((world) => (
          <Card
            key={world.id}
            className={`rounded-xl border-none w-full ${
              world.locked ? "opacity-60 bg-gray-50" : "bg-white"
            }`}
            style={{
              maxWidth: "100%",
              minWidth: 0,
              maxHeight: "500px",
              minHeight: "450px"
            }}
          >
            <CardContent className="p-0">
              {/* World Image */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={world.image}
                  alt={world.title}
                  fill
                  className=" rounded-t-2xl"
                />
                {world.locked && (
                  <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center">
                    <Lock className="w-8 h-8 text-gray-500 mb-2" />
                    <p className="text-sm text-gray-600 text-center px-3">
                      Complete previous worlds to unlock
                    </p>
                  </div>
                )}
              </div>

              {/* World Info */}
              <div className="p-4 mt-4 space-y-3">
                <h3 className="font-semibold text-gray-800">{world.title}</h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress</span>
                    <span>{world.progress}%</span>
                  </div>
                  <Progress value={world.progress} className="h-2" />
                </div>

                {!world.locked ? (
                  <Button className="w-full  text-lg py-6 bg-blue-600 hover:bg-blue-700">
                    Start Learning
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    Locked
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
