'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScoreCard } from './ScoreCard';
import fortnitepic from '@/assets/fortnite.png';
import warzonepic from '@/assets/warzone.png';
import wordlepic from '@/assets/wordle.png';
import Link from 'next/link';
import AddScoreModal from "@/components/AddScoreModal";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  userId: string;
  username: string;
  exp: number;
}

interface ScoreItem {
  _id: string;
  game: string;
  winCount: string;
  userIdentification: string;
}

function CardGridUserScores() {
  const [userName, setUserName] = useState("");
  const [scores, setScores] = useState<ScoreItem[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const decoded = jwtDecode<JWTPayload>(token);
      setUserName(decoded.username);

      const fetchData = async () => {
        const res = await fetch(`/api/items/user/${decoded.userId}`);
        const data = await res.json();
        setScores(data.items);
      };

      fetchData();
    } catch (error) {
      console.error("Error decoding token or fetching scores:", error);
    }
  }, []);

  return (
    <div className="p-16 bg-[#0C0F11] max-md:px-5 border-2 border-[#D4AF37]">
      {/* header section */}
      <div className="flex space-in-between justify-between">
        <header className="max-w-full leading-tight w-[239px]">
          <h1 className="text-5xl font-bold tracking-tight text-[#D4AF37]">
            {userName || "Loading..."}
          </h1>
          <p className="mt-2 text-xl text-[#D4AF37]">Your Top Scores!</p>
        </header>
        <div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 cursor-pointer"
          >
            Add New Score
          </button>
          {showAddModal && <AddScoreModal onClose={() => setShowAddModal(false)} />}
        </div>
      </div>

      

      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {scores.map((score, index) => (
          <div key={score._id} className={index > 0 ? 'mt-6' : ''}>
            <ScoreCard
              _id={score._id}
              imageUrl={
                score.game.toLowerCase() === "fortnite" ? fortnitepic.src :
                  score.game.toLowerCase() === "warzone" ? warzonepic.src :
                    score.game.toLowerCase() === "wordle" ? wordlepic.src :
                      "/default-score.png"
              }
              title={score.game}
              description={`${score.winCount} wins`}
              userIdentification={score.userIdentification}
              game={score.game}
              editable={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGridUserScores;
