/* TODO

Finish initGame function ( Create html to draw game )
reduce lives global variable
determine what happens when game is won

*/

import { doesNotThrow } from 'assert'
import { time } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Gamenick() {
// generates a 7x7 playing field; Icons can only appear on ([EVEN][EVEN]) Squares and Walls can only exist on ([EVEN][ODD]) or ([ODD][EVEN]) Squares.
  var cell: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]
  // holds player coordinates
  var playerY: number = 0
  var playerX: number = 0
  // holds the tile the player is standing on, defaults to 0 (empty Square)
  var holdTyle = 0
  // hasKey is relevant for the winning condition (Key has to be picked up, before Game can be won)
  var hasKey = false
  // makes sure game is set up only once
  var gameSetUp = false

  setupGame()
  //Generate Playing field
  // (In previous iterations we used a banana and the Eiffeltower)
  //  EmptySquare: 0
  //  Player: 1
  //  Key: 5
  //  Lock: 6
  //  Wall: 10
  //  Banana/Compass: 20
  //  Clock/Eiffeltower: 30
  //

  function addWall(col: number, row: number) {
    cell[col][row] = 10
  }
  function addBanana(col: number, row: number) {
    cell[col][row] = 20
  }
  function addEiffelTower(col: number, row: number) {
    cell[col][row] = 30
  }

  //Player, Keys and Lock were placed totally randomly, since every tile could be reached by the design of the labyrinths. No edge cases could exist.

  function generatePlayer() {
    var rngy = Math.floor(Math.random() * 4 + 1) * 2 - 2
    var rngx = Math.floor(Math.random() * 4 + 1) * 2 - 2
    if (cell[rngy][rngx] == 0) {
      cell[rngy][rngx] = 1
      playerX = rngx
      playerY = rngy
    } else {
      generatePlayer()
    }
  }
  function generateKey() {
    var rngy = Math.floor(Math.random() * 4 + 1) * 2 - 2
    var rngx = Math.floor(Math.random() * 4 + 1) * 2 - 2
    if (cell[rngy][rngx] == 0) {
      cell[rngy][rngx] = 5
    } else {
      generateKey()
    }
  }
  function generateLock() {
    var rngy = Math.floor(Math.random() * 4 + 1) * 2 - 2
    var rngx = Math.floor(Math.random() * 4 + 1) * 2 - 2
    if (cell[rngy][rngx] == 0) {
      cell[rngy][rngx] = 6
    } else {
      generateLock()
    }
  }

 // This function was supposed to reload the whole board, after the player has moved. However, it did not work. 
 // It did update the sources of the images correctly, however it did not matter for the graphics. Those had to be reloaded somehow.
  function updateGame() {
    consoleLog()
    var timestamp = new Date().getTime()
    updateImage(timestamp, 'img1', 0, 0)
    updateImage(timestamp, 'img2', 2, 0)
    updateImage(timestamp, 'img3', 4, 0)
    updateImage(timestamp, 'img4', 6, 0)
    updateImage(timestamp, 'img5', 0, 2)
    updateImage(timestamp, 'img6', 2, 2)
    updateImage(timestamp, 'img7', 4, 2)
    updateImage(timestamp, 'img8', 6, 2)
    updateImage(timestamp, 'img9', 0, 4)
    updateImage(timestamp, 'img10', 2, 4)
    updateImage(timestamp, 'img11', 4, 4)
    updateImage(timestamp, 'img12', 6, 4)
    updateImage(timestamp, 'img13', 0, 6)
    updateImage(timestamp, 'img14', 2, 6)
    updateImage(timestamp, 'img15', 4, 6)
    updateImage(timestamp, 'img16', 6, 6)
    //either reload every image here
  }

  function consoleLog() {
    console.log(cell[0][0], cell[0][2], cell[0][4], cell[0][6])
    console.log(cell[2][0], cell[2][2], cell[2][4], cell[2][6])
    console.log(cell[4][0], cell[4][2], cell[4][4], cell[4][6])
    console.log(cell[6][0], cell[6][2], cell[6][4], cell[6][6])
  }
  function updateImage(
    timestamp: number,
    img: string,
    col: number,
    row: number
  ) {
    var image
    var imageElement
    image = document.getElementById(img) as HTMLImageElement
    image.src = chooseImage(cell[row][col]) +  timestamp
    // or reload single image here
    
  }

  function setupGame() {
    // randomly select one set up, and set game accordingly
    if (gameSetUp == false) {
      var x = Math.floor(Math.random() * 8 + 1)
      switch (x) {
        case 1: {
          addWall(0, 1)
          addWall(4, 1)
          addWall(6, 1)
          addWall(0, 3)
          addWall(2, 3)
          addWall(6, 3)
          addWall(6, 5)
          addWall(1, 6)
          addWall(3, 6)
          addBanana(2, 4)
          addEiffelTower(4, 2)
          break
        }
        case 2: {
          addWall(0, 1)
          addWall(2, 1)
          addWall(2, 3)
          addWall(2, 5)
          addWall(5, 0)
          addWall(5, 2)
          addWall(5, 4)
          addWall(3, 2)
          addWall(1, 4)
          addBanana(0, 6)
          addEiffelTower(4, 2)
          break
        }
        case 3: {
          addWall(1, 0)
          addWall(1, 2)
          addWall(4, 1)
          addWall(6, 1)
          addWall(0, 5)
          addWall(2, 5)
          addWall(3, 4)
          addWall(5, 4)
          addWall(5, 6)
          addBanana(0, 2)
          addEiffelTower(4, 6)
          break
        }
        case 4: {
          addWall(1, 0)
          addWall(1, 2)
          addWall(1, 6)
          addWall(3, 0)
          addWall(5, 2)
          addWall(2, 3)
          addWall(4, 3)
          addWall(2, 5)
          addWall(6, 5)
          addBanana(0, 2)
          addEiffelTower(4, 6)
          break
        }
        case 5: {
          addWall(1, 0)
          addWall(3, 0)
          addWall(5, 0)
          addWall(1, 2)
          addWall(3, 4)
          addWall(6, 3)
          addWall(6, 5)
          addWall(0, 5)
          addWall(2, 5)
          addBanana(0, 0)
          addEiffelTower(4, 4)
          break
        }
        case 6: {
          addWall(0, 1)
          addWall(3, 0)
          addWall(5, 0)
          addWall(0, 5)
          addWall(5, 2)
          addWall(4, 3)
          addWall(5, 6)
          addWall(1, 4)
          addWall(2, 5)
          addBanana(2, 0)
          addEiffelTower(4, 2)
          break
        }
        case 7: {
          addWall(0, 1)
          addWall(3, 0)
          addWall(5, 0)
          addWall(0, 3)
          addWall(0, 5)
          addWall(2, 3)
          addWall(4, 3)
          addWall(3, 6)
          addWall(5, 6)
          addBanana(2, 2)
          addEiffelTower(2, 6)
          break
        }
        case 8: {
          addWall(1, 0)
          addWall(3, 0)
          addWall(4, 1)
          addWall(0, 3)
          addWall(0, 5)
          addWall(2, 3)
          addWall(2, 5)
          addWall(5, 4)
          addWall(6, 5)
          addBanana(6, 4)
          addEiffelTower(0, 4)
          break
        }
      }
      generatePlayer()
      generateLock()
      generateKey()
      gameSetUp = true
    }
  }
  function victoryConditionCheck() {
    if (holdTyle == 5) {
      hasKey = true
    }
    if (hasKey == true && holdTyle == 6) {
      // game is won
    }
  }
  function moveRight() {
    //collisions with outer walls shall be ignored
    var direction = 2
    if (playerX + direction > 7 || playerX + direction < 0) {
    } else {
      if (cell[playerY][playerX + 0.5 * direction] == 10) {
        //reduce lives
      } else {
        cell[playerY][playerX] = holdTyle
        playerX += direction
        holdTyle = cell[playerY][playerX]
        cell[playerY][playerX] = 1
        victoryConditionCheck()
        updateGame()
      }
    }
  }
  function moveLeft() {
    //collisions with outer walls shall be ignored
    var direction = -2
    if (playerX + direction > 7 || playerX + direction < 0) {
    } else {
      if (cell[playerY][playerX + 0.5 * direction] == 10) {
        //reduce lives
      } else {
        cell[playerY][playerX] = holdTyle
        playerX += direction
        holdTyle = cell[playerY][playerX]
        cell[playerY][playerX] = 1
        victoryConditionCheck()
        updateGame()
      }
    }
  }
  function moveUp() {
    //collisions with outer walls shall be ignored
    var direction = -2
    if (playerY + direction > 7 || playerY + direction < 0) {
    } else {
      if (cell[playerY + 0.5 * direction][playerX] == 10) {
        //reduce lives
      } else {
        cell[playerY][playerX] = holdTyle
        playerY += direction
        holdTyle = cell[playerY][playerX]
        cell[playerY][playerX] = 1
        victoryConditionCheck()
        updateGame()
      }
    }
  }
  function moveDown() {
    var direction = 2
    console.log(cell[playerY][playerX])
    //collisions with outer walls shall be ignored
    if (playerY + direction > 7 || playerY + direction < 0) {
    } else {
      if (cell[playerY + 0.5 * direction][playerX] == 10) {
        //reduce lives
      } else {
        console.log(cell[playerY][playerX])
        cell[playerY][playerX] = holdTyle
        playerY += direction
        holdTyle = cell[playerY][playerX]
        cell[playerY][playerX] = 1
        victoryConditionCheck()
        updateGame()
      }
    }
  }
  // assigns a Image, depending on the content of the cell
  var test = ''
  function chooseImage(cellValue: number) {
    switch (cellValue) {
      case 0:
        test = '/leer.png'
        break
      case 1:
        test = '/Hut.png'
        break
      case 5:
        test = '/Schluessel.png'
        break
      case 6:
        test = '/Schloss.png'
        break
      case 20:
        test = '/Kompass.png'
        break
      case 30:
        test = '/Uhr.png'
        break
    }
    return test
  }
  
   return (
    <html>
      <head>
        <title>Game2</title>
      </head>
      <body>
        <div className="mx-auto max-w-7xl">
          {/* This was used to debug the output gamefield before we had the graphics
          {cell} <br></br>
          {cell[0][0]} {cell[0][2]} {cell[0][4]} {cell[0][6]} <br></br>
          {cell[2][0]} {cell[2][2]} {cell[2][4]} {cell[2][6]} <br></br>
          {cell[4][0]} {cell[4][2]} {cell[4][4]} {cell[4][6]} <br></br>
          {cell[6][0]} {cell[6][2]} {cell[6][4]} {cell[6][6]} <br></br>
          */}
          <div className="border-4 border-gray-600">
            <div className="justify-centerpt-4 mx-auto flex items-center">
              <button
                className="mx-auto mt-4 cursor-pointer items-center justify-center rounded-3xl border-4 border-gray-600 bg-yellow-300 p-4"
                onClick={moveUp}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-10 w-10 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="mx-auto flex items-center justify-center pt-4">
              <button
                className="mr-4 cursor-pointer justify-center rounded-3xl border-4 border-gray-600 bg-yellow-300 p-4"
                onClick={moveLeft}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="width-600px height-600px border-2 border-gray-600 ">
                <div className="row-auto flex">
                  <Image
                    id="img1"
                    src={chooseImage(cell[0][0])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img2"
                    src={chooseImage(cell[0][2])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img3"
                    src={chooseImage(cell[0][4])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img4"
                    src={chooseImage(cell[0][6])}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex">
                  <Image
                    id="img5"
                    src={chooseImage(cell[2][0])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img6"
                    src={chooseImage(cell[2][2])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img7"
                    src={chooseImage(cell[2][4])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img8"
                    src={chooseImage(cell[2][6])}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex">
                  <Image
                    id="img9"
                    src={chooseImage(cell[4][0])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img10"
                    src={chooseImage(cell[4][2])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img11"
                    src={chooseImage(cell[4][4])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img12"
                    src={chooseImage(cell[4][6])}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex">
                  <Image
                    id="img13"
                    src={chooseImage(cell[6][0])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img14"
                    src={chooseImage(cell[6][2])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img15"
                    src={chooseImage(cell[6][4])}
                    width={50}
                    height={50}
                  />
                  <Image
                    id="img16"
                    src={chooseImage(cell[6][6])}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div>
                <button
                  className="ml-4 cursor-pointer justify-center rounded-3xl border-4 border-gray-600 bg-yellow-300 p-4"
                  onClick={moveRight}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center ">
              <button
                className="m-4 cursor-pointer justify-center rounded-3xl border-4 border-gray-600 bg-yellow-300 p-4"
                onClick={moveDown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mx-auto mt-10 items-center justify-between text-center">
            <a
              href="/Games/Game3"
              className="font bold cursor-pointer items-center rounded-2xl border-2 bg-yellow-300 p-2"
            >
              Next Game
            </a>
          </div>
        </div>
      </body>
    </html>
  ) 
}


export default Gamenick
