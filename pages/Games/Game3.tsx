import React from 'react'

function Game3() {
  // This empty array stores the users input for later comparison
  var inputArray: number[] = [] 

  // Possible games are predetermined and their respective arrays are selected
  var randomRuneArray = Math.round(Math.random() * (10 - 1))
  var Arrays = new Array()
  Arrays[0] = new Array(4, 7, 8, 3, 10, 5, 11, 13, 2)
  Arrays[1] = new Array(11, 3, 13, 9, 14, 4, 6, 8, 15)
  Arrays[2] = new Array(11, 6, 4, 12, 5, 9, 10, 2, 1)
  Arrays[3] = new Array(7, 10, 9, 3, 2, 6, 12, 13, 11)
  Arrays[4] = new Array(3, 6, 11, 9, 7, 10, 12, 2, 4)
  Arrays[5] = new Array(10, 13, 5, 9, 2, 3, 12, 15, 4)
  Arrays[6] = new Array(1, 14, 11, 7, 2, 6, 10, 9, 12)
  Arrays[7] = new Array(12, 10, 3, 11, 4, 13, 7, 15, 8)
  Arrays[8] = new Array(1, 5, 3, 7, 15, 4, 11, 6, 12)
  Arrays[9] = new Array(12, 9, 14, 7, 11, 5, 3, 10, 15)

  var selectedRuneArray: number[] = Arrays[randomRuneArray]

  //This "randomizes" the display of runes in the 3x3 grid, the sortedArray is used fromnow on
  var sortedArray: number[] = []
  for (var i = 0; i < selectedRuneArray.length; i++) {
    sortedArray.push(selectedRuneArray[i])
  }
  sortedArray.sort((n1, n2) => n1 - n2)

  //Each button is assigned a number that it adds to the inputArray upon being pressed
  var button1number = sortedArray[0]
  var button2number = sortedArray[1]
  var button3number = sortedArray[2]
  var button4number = sortedArray[3]
  var button5number = sortedArray[4]
  var button6number = sortedArray[5]
  var button7number = sortedArray[6]
  var button8number = sortedArray[7]
  var button9number = sortedArray[8]

  //The active state of each button is tracked, inhibiting double pressing one
  var isActive1 = true
  var isActive2 = true
  var isActive3 = true
  var isActive4 = true
  var isActive5 = true
  var isActive6 = true
  var isActive7 = true
  var isActive8 = true
  var isActive9 = true

  //When a button is pressed, it is deactivated and the assigned number is pushed into the array
  function button1pressed() {
    if (isActive1) {
      inputArray.push(button1number)
      isActive1 = false
    }
  }
  function button2pressed() {
    if (isActive2) {
      inputArray.push(button2number)
      isActive2 = false
    }
  }
  function button3pressed() {
    if (isActive3) {
      inputArray.push(button3number)
      isActive3 = false
    }
  }
  function button4pressed() {
    if (isActive4) {
      inputArray.push(button4number)
      isActive4 = false
    }
  }
  function button5pressed() {
    if (isActive5) {
      inputArray.push(button5number)
      isActive5 = false
    }
  }
  function button6pressed() {
    if (isActive6) {
      inputArray.push(button6number)
      isActive6 = false
    }
  }
  function button7pressed() {
    if (isActive7) {
      inputArray.push(button7number)
      isActive7 = false
    }
  }
  function button8pressed() {
    if (isActive8) {
      inputArray.push(button8number)
      isActive8 = false
    }
  }
  function button9pressed() {
    if (isActive9) {
      inputArray.push(button9number)
      isActive9 = false
    }
  }

  function checkButton() {
    if (inputArray == selectedRuneArray) {
      //win condition
    } else {
      //You win! (Show button for next game)
    }
  }

  //The reset button reactivates all of the buttons and empties the input array
  function resetButton() {
    var isActive1 = true
    var isActive2 = true
    var isActive3 = true
    var isActive4 = true
    var isActive5 = true
    var isActive6 = true
    var isActive7 = true
    var isActive8 = true
    var isActive9 = true

    inputArray = []
  }

  //
  return (
    <div className="maw-w-7xl mx-auto items-center justify-center text-center">
      <div className="mx-auto pt-4"> {/* Row one Rune display*/}
        <button>
          <img
            src={'/' + 'r' + sortedArray[0] + '.png'}
            onClick={button1pressed}
          />
        </button>
        <button className="mr-2 ml-2">
          <img
            src={'/' + 'r' + sortedArray[1] + '.png'}
            onClick={button2pressed}
          />
        </button>
        <button>
          <img
            src={'/' + 'r' + sortedArray[2] + '.png'}
            onClick={button3pressed}
          />
        </button>
      </div>
      <div className="mx-auto"> {/*Row two Rune display t*/}
        <button>
          <img
            src={'/' + 'r' + sortedArray[3] + '.png'}
            onClick={button3pressed}
          />
        </button>
        <button className="mr-2 ml-2">
          <img
            src={'/' + 'r' + sortedArray[4] + '.png'}
            onClick={button4pressed}
          />
        </button>
        <button>
          <img
            src={'/' + 'r' + sortedArray[5] + '.png'}
            onClick={button5pressed}
          />
        </button>
      </div>
      <div className="mx-auto"> {/* Row three Rune display*/}
        <button>
          <img
            src={'/' + 'r' + sortedArray[6] + '.png'}
            onClick={button6pressed}
          />
        </button>
        <button className="mr-2 ml-2">
          <img
            src={'/' + 'r' + sortedArray[7] + '.png'}
            onClick={button7pressed}
          />
        </button>
        <button>
          <img
            src={'/' + 'r' + sortedArray[8] + '.png'}
            onClick={button8pressed}
          />
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={resetButton}
          className="font bold m-2 cursor-pointer rounded-2xl border-2 bg-yellow-300 pt-2"
        >
          Reset Input
        </button>
      </div>
      <div className="mt-4">
        <button
          className="font bold mt-4 cursor-pointer rounded-2xl border-2 bg-yellow-300 p-2"
          onClick={checkButton}
        >
          Finish your attempt:
        </button>
      </div>
      <div className="mt-4">
        <a
          className="font bold mt-4 cursor-pointer rounded-2xl border-2 bg-yellow-300 p-2"
          href="/Scoreboard"
        >
          Scoreboard
        </a>
      </div>
    </div>
  )
}

export default Game3
