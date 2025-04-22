"use client";
import React from "react";

function SearchField() {
  return (
    <div className="relative max-w-[500px] w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        className="w-full py-2 pl-10 pr-4 text-black bg-[#D4AF37] rounded-md focus:outline-none font-bold"
        placeholder="Search games..."
      />
    </div>
  );
}

export default SearchField;