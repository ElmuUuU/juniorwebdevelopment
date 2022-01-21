import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Welcome to the cardboard games!</h1>
      <Link href="/Games">
        <p className="mt-10 text-6xl font bold border-2 rounded-3xl pt-2 p-4 bg-yellow-300 cursor-pointer">
          Start the game
        </p>
      </Link>
    </div>
  );
}

export default Hero;
