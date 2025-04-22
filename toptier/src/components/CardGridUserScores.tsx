"use client";

import React from "react";
import ScoreCard from "./ScoreCard";
import fortnitepic from "@/assets/fortnite.png";
import warzonepic from "@/assets/warzone.png";
import wordlepic from "@/assets/wordle.png";
import Link from "next/link";
import { CardGridContentListProps } from "@/components/CardGridContentList";

function CardGridUserScores({

  scores = [
    {
      id: 1,
      title: "3 wins",
      description: "James Casey, 4th Year Computer Science",
      imageUrl: warzonepic.src,
    },
    {
      id: 2,
      title: "34 wins",
      description: "James Casey, 4th Year Computer Science",
      imageUrl: fortnitepic.src,
    },
    {
      id: 3,
      title: "16 wins",
      description: "James Casey, 4th Year Computer Science",
      imageUrl: wordlepic.src,
    },
  ],
}: CardGridContentListProps) {
  function editScore() {

  }
  function deleteScore() {

  }

  return (
    <div className="p-16 bg-[#0C0F11] max-md:px-5">

      {/* header section */}
      <div className="flex items-center justify-between px-10">
        <header className="max-w-full leading-tight w-[239px]">
          <h1 className="text-5xl font-bold tracking-tight text-[#D4AF37]">
            James Casey
          </h1>
          <p className="mt-2 text-xl text-[#D4AF37]">Your Top Scores!</p>
        </header>
        <div className="flex gap-4">
          <Link href="/add-item" className="mr-10">
            <button 
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
              onClick={editScore}>
              Add New Score
            </button>
          </Link>
          <Link href="/auth-view">
            <button 
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
              onClick={deleteScore}>
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {scores.map((score, index) => (
          <div key={score.id} className={index > 0 ? 'mt-6' : ''}>
            <ScoreCard
              imageUrl={score.imageUrl}
              title={score.title}
              description={score.description}
              isUser={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGridUserScores;
