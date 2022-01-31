import { randomInt } from 'crypto'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold">Welcome to ComIsKey!</h1>
      <Link href="/Games/Game1">
        <p className="font bold mt-10 animate-pulse cursor-pointer rounded-3xl border-2 bg-yellow-300 p-4 pt-2 text-6xl">
          Start the games
        </p>
      </Link>
      <Link href="/Solutions">
        <p className="font bold mt-10 cursor-pointer rounded-2xl border-2 bg-yellow-300 p-2 text-2xl">
          Coach
        </p>
      </Link>
    </div>
  )
}

export default Hero
