import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Welcome to the cardboard games!</h1>
      <input className="mt-4 py-2 p-4" placeholder="Enter the given code:" />
      <Link href="/Games">
        <p className="mt-4 text-6xl font bold border-2 rounded-3xl pt-2 p-4 bg-gray-400 cursor-pointer">
          Start the game
        </p>
      </Link>
    </div>
  );
}

export default Hero;
