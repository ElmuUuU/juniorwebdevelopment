import Image from 'next/image'
import React from 'react'

function Games() {
  //Get lives for each game
  var lives: number = 3

  //create solutions Map
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
  var solutionString: String
  var randomString = Math.round(Math.random() * (3 - 1) + 1)

  //Get the random Map and solution
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

  //Check the input form, if it is the same as the solution of the picture.
  function checkForm() {
    let inputForm = document.getElementById('inputValue') as HTMLInputElement
    var inputFormString = String(inputForm.value)
    inputFormString = inputFormString.toLowerCase()
    console.log(inputFormString)
    console.log(solutionString)
    if (inputFormString == solutionString.toLowerCase()) {
    } else {
      lives = lives - 1
    }
    console.log(lives)
  }

  //Put out the Content and call the functions
  return (
    <div className="flex w-full flex-col items-center justify-center pt-10 text-center">
      <p className="pb-4">Use Image No. {mapVariation}</p>
      <p>Leben: {lives}</p>
      {/* Get the Image of the map */}
      <Image
        src={mapSelection}
        alt=""
        width="640px"
        height="360px"
        layout="fixed"
        className="rounded-3xl pt-4"
      />
      <form className="flex pt-4" method="POST">
        <label htmlFor="name" className="mt-4">
          Destination
        </label>
        <input
          className="m-4"
          id="inputValue"
          type="text"
          required
          placeholder="Put the place you think"
        />
      </form>
      <button onClick={checkForm}>Check solution</button>
      <a
        href="/Games/Game2"
        className="font bold mt-2 mr-4 cursor-pointer rounded-2xl border-2 bg-yellow-300 p-2"
        id="nextGame"
      >
        Next game
      </a>
    </div>
  )
}

export default Games
