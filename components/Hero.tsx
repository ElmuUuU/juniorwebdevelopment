import { randomInt } from "crypto";
import Link from "next/link";
import React from "react";

let random = Math.round(Math.random() * 3 + 1);

function Hero() {
  var randomGame = Math.round(Math.random() * (3 - 1) + 1);
  var game = process.env.GAME_ID;
  game = `/Games/Game${randomGame}`;
  game = "/Games/Game1";
  var lives = parseInt(process.env.LIVES!);
  lives = 3;

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Welcome to the cardboard games!</h1>
      <Link href={game}>
        <p className="mt-10 text-6xl font bold border-2 rounded-3xl pt-2 p-4 bg-yellow-300 cursor-pointer animate-pulse">
          Start the game
        </p>
      </Link>
    </div>
  );
}

export default Hero;
