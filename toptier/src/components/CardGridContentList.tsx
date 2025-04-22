"use client";

import React from "react";
import { ScoreCard } from "./ScoreCard";
import fortnitepic from "@/assets/fortnite.png";
import Link from "next/link";

// a 'score' data type to store data for the highscores
export interface Score {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface CardGridContentListProps {
  scores?: Score[];
  headerTitle?: string;
  headerDescription?: string;
}

function CardGridContentList({
  scores = [
    {
      id: 1,
      title: "62 wins",
      description: "James Casey, 4th Year Computer Science",
      imageUrl: fortnitepic.src,
    },
    {
      id: 2,
      title: "38 wins",
      description: "Gonan Shaw, 3rd Year Finance",
      imageUrl: fortnitepic.src,
    },
    {
      id: 3,
      title: "16 wins",
      description: "Nevan Nickel, 1st Year Artificial Intelligence",
      imageUrl: fortnitepic.src,
    },
  ],
}: CardGridContentListProps) {
  return (
    <section className="p-16 bg-[#0C0F11] max-md:px-5 border-2 border-[#D4AF37]">

      {/* Header section */}
      <div className="flex px-10 space-in-between"> 
        <header className="max-w-full leading-tight w-[239px]">
          <h1 className="text-5xl font-bold tracking-tight text-[#D4AF37]">
            Fortnite
          </h1>
          <p className="mt-2 text-xl text-[#D4AF37]">
            All-time Fortnite wins
          </p>
        </header>
      </div>

      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {scores.map((score, index) => (
          <div key={score.id} className={index > 0 ? "mt-6" : ""}>
            <ScoreCard
              imageUrl={score.imageUrl}
              title={score.title}
              description={score.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardGridContentList;
