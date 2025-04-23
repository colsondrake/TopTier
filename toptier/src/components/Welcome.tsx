'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/components/Logo";
import wordlepic from "@/assets/wordle.png";
import fortnitepic from "@/assets/fortnite.png";
import warzonepic from "@/assets/warzone.png";

// welcome 'splash' page for the website
export default function Welcome() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0C0F11] text-white px-6 py-12">
      {/* Logo or Main Hero Image */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Welcome Text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Welcome to <span className="text-[#D4AF37]">TopTier</span>!
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        Your very own game ranking platform! See where you land on the leaderboard!
      </p>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        Log in or sign up to compare you rank with your friends, classmates, and others around the world!
      </p>

      {/* Get Started */}
      <div className="flex">
        <Link href="/unauth-view">
          <button 
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mb-8">
            Get Started
          </button>
        </Link>
      </div> 
  
      {/* Explanation text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        About the <span className="text-[#D4AF37]">project...</span>
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        TopTier is a full-stack, website development project designed to 'localize' video game competition. The central idea is to allow users to compare their gaming skills with others in their community or around the world. By creating a platform where players can rank themselves and compete, TopTier aims to bring a sense of friendly rivalry and motivation to improve.
      </p>

      {/* Secondary Image/Illustration */}
      <div className="mt-12">
        <div className="flex gap-5 justify-center">
          <Image
            src={wordlepic} // Placeholder path
            alt="wordle image"
            width={400}
            height={250}
            className="rounded-md shadow-md"
          />
          <Image
            src={fortnitepic} // Placeholder path
            alt="wordle image"
            width={400}
            height={250}
            className="rounded-md shadow-md"
          />
          <Image
            src={warzonepic} // Placeholder path
            alt="wordle image"
            width={400}
            height={250}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </main>
  )
}
