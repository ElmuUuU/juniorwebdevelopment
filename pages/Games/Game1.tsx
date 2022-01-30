import Image from 'next/image'
import React from 'react'
import useState from 'react'

let lives: number = parseInt(process.env.LIVES!)
console.log(lives)
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
  ['5a', 'Opernhaus Sydney'],
  ['5b', 'Sydney Park'],
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
  console.log(inputForm)
  let inputString = String(inputForm.toLowerCase)
  if (mapVariation == '1a') {
    if ((inputString = 'palmengarten')) {
    }
  } else if (mapVariation == '1b') {
    if ((inputString = 'alte oper frankfurt')) {
    }
  } else if (mapVariation == '1c') {
    if ((inputString = 'historisches museum frankfurt')) {
    }
  } else if (mapVariation == '2a') {
    if ((inputString = 'griffith-observatorium')) {
    }
  } else if (mapVariation == '2b') {
    if ((inputString = 'dodger stadium')) {
    }
  } else if (mapVariation == '2c') {
    if ((inputString = 'los angeles country museum of art')) {
    }
  } else if (mapVariation == '3a') {
    if ((inputString = 'dublin zoo')) {
    }
  } else if (mapVariation == '3b') {
    if ((inputString = 'sandymount beach')) {
    }
  } else if (mapVariation == '3c') {
    if ((inputString = 'mater hospital')) {
    }
  } else if (mapVariation == '4a') {
    if ((inputString = 'nationalstadion')) {
    }
  } else if (mapVariation == '4b') {
    if ((inputString = 'tokyo tower')) {
    }
  } else if (mapVariation == '4c') {
    if ((inputString = 'hokusai-museum sumida')) {
    }
  } else if (mapVariation == '5a') {
    if ((inputString = 'opernhaus sydney')) {
    }
  } else if (mapVariation == '5b') {
    if ((inputString = 'sydney park')) {
    }
  } else if (mapVariation == '5c') {
    if ((inputString = 'bondi beach')) {
    }
  } else {
    lives = lives - 1
    process.env.LIVES = lives.toString()
  }
  console.log(lives)
}

function Games() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-20 pt-20 text-center">
      <p className="pb-4">Use Image No. {mapVariation}</p>
      <p>Leben: {lives}</p>
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
        <button onClick={checkForm}>Lösung überprüfen</button>
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
