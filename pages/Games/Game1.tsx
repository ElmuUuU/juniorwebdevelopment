import Image from 'next/image'
import React from 'react'

function Games() {
  var randomGame = Math.round(Math.random() * (3 - 1) + 1)
  var game = process.env.GAME_ID

  game = `/Games/Game${randomGame}`

  let solutionsMap = new Map<string, string>([
    ['1a', 'test1'],
    ['1b', 'test2'],
    ['1c', 'test3'],
    ['2a', 'test4'],
    ['2b', 'test5'],
    ['2c', 'test6'],
    ['3a', 'test7'],
    ['3b', 'test8'],
    ['3c', 'test9'],
    ['4a', 'test10'],
    ['4b', 'test11'],
    ['4c', 'test12'],
    ['5a', 'test13'],
    ['5b', 'test14'],
    ['5c', 'test15'],
  ])

  var randomMap = Math.round(Math.random() * (5 - 1) + 1)
  var mapVariation = ''
  var solutionString
  var randomString = Math.round(Math.random() * (3 - 1) + 1)
  switch (randomString) {
    case 1: {
      mapVariation = randomMap.toString() + 'a'
      break
    }
    case 2: {
      mapVariation = randomMap.toString() + 'b'
      break
    }
    case 3: {
      mapVariation = randomMap.toString() + 'c'
      break
    }
  }

  const mapSelection = `/m${mapVariation}.png`
  solutionString = solutionsMap.get(mapVariation)!
  var previousGame = process.env.PREVIOUS_GAME

  function checkForm() {
    {
      /*if gleich, weiter, else -1Leben */
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-20 pt-20 text-center">
      <p className="pb-4">Use Image No. {mapSelection}</p>
      <Image
        src={mapSelection}
        alt=""
        width="640px"
        height="360px"
        layout="fixed"
        className="pt-4"
      />
      <form className="flex pt-4" method="POST">
        <label htmlFor="name" className="mt-4">
          Destination
        </label>
        <input
          className="m-4"
          id="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Put the place you think"
        />
        <a
          href="/Games/Game2"
          className="font bold mt-2 cursor-pointer rounded-2xl border-2 bg-yellow-300 px-1 pt-2"
        >
          Next Game
        </a>
      </form>
    </div>
  )
}

export default Games
