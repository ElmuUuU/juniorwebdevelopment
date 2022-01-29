/* TODO

Finish initGame function ( Create html to draw game )
reduce lives global variable
determine what happens when game is won

*/

import { doesNotThrow } from 'assert'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Gamenick() {
  var randomGame = Math.round(Math.random() * (3 - 1) + 1)
  var game = process.env.GAME_ID

  game = `/Games/Game${randomGame}`
  var previousGame = parseInt(process.env.PREVIOUS_GAME!)
  var randomString = Math.round(Math.random() * (3 - 1) + 1)

  var cell: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]
  var playerY: number
  var playerX: number
  var holdTyle = 0
  var hasKey = false
  var whichGame: number = 0

  setupGame()
  initGame()

  //Generate Playing field
  //
  //  EmptySquare: 0
  //  Player: 1
  //  Key: 5
  //  Lock: 6
  //  Wall: 10
  //  Kompass: 20
  //  Uhr: 30
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

  //Generate player location / win condition

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

  //Start game and set up board

  function initGame() {
    //draw game field
  }

  function setupGame() {
    // randomly select one set up, and set game accordingly
    var x = Math.floor(Math.random() * 8 + 1)
    whichGame = x
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
    generateLock()
    generateKey()
    generatePlayer()
  }
  function victoryConditionCheck() {
    if (holdTyle == 5) {
      hasKey = true
    }
    if (hasKey == true && holdTyle == 6) {
      // game is won
    }
  }
  function moveX(direction: number) {
    //collisions with outer walls shall be ignored
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
        initGame()
      }
    }
  }
  function moveY(direction: number) {
    //collisions with outer walls shall be ignored
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
        initGame()
      }
    }
  }

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
    <div className="mx-auto max-w-7xl">
      {whichGame} + {cell} <br></br>
      {cell[0][0]} {cell[0][2]} {cell[0][4]} {cell[0][6]} <br></br>
      {cell[2][0]} {cell[2][2]} {cell[2][4]} {cell[2][6]} <br></br>
      {cell[4][0]} {cell[4][2]} {cell[4][4]} {cell[4][6]} <br></br>
      {cell[6][0]} {cell[6][2]} {cell[6][4]} {cell[6][6]} <br></br>
      <div className="border-4 border-gray-600">
        <div className="justify-centerpt-4 mx-auto flex items-center">
          <p
            className="mx-auto mt-4 cursor-pointer items-center justify-center rounded-3xl border-4 border-gray-600 bg-yellow-300 p-4"
            onClick={moveY}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-10 w-10 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
        </div>

        <div className="mx-auto flex items-center justify-center pt-4">
          <button
            className="mr-4 cursor-pointer justify-center rounded-3xl border-4 border-gray-600 p-4"
            onClick={moveX(-2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div className="width-600px height-600px border-2 border-gray-600 ">
            <div className="row-auto flex">
              <Image src={chooseImage(cell[0][0])} width={50} height={50} />
              <Image src={chooseImage(cell[0][2])} width={50} height={50} />
              <Image src={chooseImage(cell[0][4])} width={50} height={50} />
              <Image src={chooseImage(cell[0][6])} width={50} height={50} />
            </div>
            <div className="flex">
              <Image src={chooseImage(cell[2][0])} width={50} height={50} />
              <Image src={chooseImage(cell[2][2])} width={50} height={50} />
              <Image src={chooseImage(cell[2][4])} width={50} height={50} />
              <Image src={chooseImage(cell[2][6])} width={50} height={50} />
            </div>
            <div className="flex">
              <Image src={chooseImage(cell[4][0])} width={50} height={50} />
              <Image src={chooseImage(cell[4][2])} width={50} height={50} />
              <Image src={chooseImage(cell[4][4])} width={50} height={50} />
              <Image src={chooseImage(cell[4][6])} width={50} height={50} />
            </div>
            <div className="flex">
              <Image src={chooseImage(cell[6][0])} width={50} height={50} />
              <Image src={chooseImage(cell[6][2])} width={50} height={50} />
              <Image src={chooseImage(cell[6][4])} width={50} height={50} />
              <Image src={chooseImage(cell[6][6])} width={50} height={50} />
            </div>
          </div>
          <div>
            <button className="ml-4 cursor-pointer justify-center rounded-3xl border-4 border-gray-600 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center ">
          <p className="mb-4 mt-4 cursor-pointer rounded-3xl border-4 border-gray-600 bg-yellow-300 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
        </div>
      </div>
      <a
        href="/Games/Game3"
        className="font bold cursor-pointer rounded-2xl border-2 bg-yellow-300 px-1 pt-1"
      >
        Next Game
      </a>
    </div>
  )
}

export default Gamenick
