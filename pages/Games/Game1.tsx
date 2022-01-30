import Image from 'next/image'
import React from 'react'

let inputform = ''
let lives: number = parseInt(process.env.LIVES!)
lives = 3

const solutionsMap = new Map<string, string>([
  ['1a', 'Palmengarten'],
  ['1b', 'Alte Oper Frankfurt'],
  ['1c', 'Historisches Museum Frankfurt'],
  ['2a', 'Griffith-Observatorium'],
  ['2b', 'Dodger Stadium'],
  ['2c', 'Los Angeles Country Museum of Art'],
  ['3a', 'Dublin Zoo'],
  ['3b', 'Sandymount Beach'],
  ['3c', 'Mater Hospital'],
  ['4a', 'Nationalstadion'],
  ['4b', 'Tokyo Tower'],
  ['4c', 'Hokusai-Museum Sumida'],
  ['5a', 'Opernhaus Sydeny'],
  ['5b', 'Sydeny Park'],
  ['5c', 'Bondi Beach'],
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

function checkForm() {
  let inputForm = ''
  if (process.browser) {
    inputForm = String(document.getElementById('inputValue'))
  }
  let test = String(inputForm.toLowerCase)
  if (mapVariation == '1a') {
    if ((test = 'palmengarten')) {
    }
  } else if (mapVariation == '1b') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '1c') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '2a') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '2b') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '2c') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '3a') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '3b') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '3c') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '4a') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '4b') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '4c') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '5a') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '5b') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '5c') {
    if ((test = 'alte oper frankfurt')) {
    }
  } else {
    lives = lives - 1
    process.env.LIVES = lives.toLocaleString()
  }
  console.log(lives)
}

function Games() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-20 pt-20 text-center">
      <p className="pb-4">Use Image No. {mapVariation}</p>
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
          id="inputValue"
          type="text"
          autoComplete="name"
          required
          placeholder="Put the place you think"
        />
        <a
          href="/Games/Game2"
          className="font bold mt-2 mr-4 cursor-pointer rounded-2xl border-2 bg-yellow-300 px-1 pt-2"
          onClick={checkForm}
        >
          Bestätigen
        </a>
      </form>
    </div>
  )
}

export default Games
