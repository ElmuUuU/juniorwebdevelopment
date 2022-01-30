import React from 'react'

function Game3() {
  var array: number[] = []

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

  var sortedArray: number[] = []
  for (var i = 0; i < selectedRuneArray.length; i++) {
    sortedArray.push(selectedRuneArray[i])
  }
  sortedArray.sort((n1, n2) => n1 - n2)

  var button1number = sortedArray[0]
  var button2number = sortedArray[1]
  var button3number = sortedArray[2]
  var button4number = sortedArray[3]
  var button5number = sortedArray[4]
  var button6number = sortedArray[5]
  var button7number = sortedArray[6]
  var button8number = sortedArray[7]
  var button9number = sortedArray[8]

  function button1pressed() {
    var isActive = true
    if (isActive) {
      array.push(button1number)
      isActive = false
    }
  }
  function button2pressed() {
    var isActive = true
    if (isActive) {
      array.push(button2number)
      isActive = false
    }
  }
  function button3pressed() {
    var isActive = true
    if (isActive) {
      array.push(button3number)
      isActive = false
    }
  }
  function button4pressed() {
    var isActive = true
    if (isActive) {
      array.push(button4number)
      isActive = false
    }
  }
  function button5pressed() {
    var isActive = true
    if (isActive) {
      array.push(button5number)
      isActive = false
    }
  }
  function button6pressed() {
    var isActive = true
    if (isActive) {
      array.push(button6number)
      isActive = false
    }
  }
  function button7pressed() {
    var isActive = true
    if (isActive) {
      array.push(button7number)
      isActive = false
    }
  }
  function button8pressed() {
    var isActive = true
    if (isActive) {
      array.push(button8number)
      isActive = false
    }
  }
  function button9pressed() {
    var isActive = true
    if (isActive) {
      array.push(button9number)
      isActive = false
    }
  }

  function checkButton() {
    if (array == selectedRuneArray) {
      //win condition
    } else {
      //You win! (Show button for next game)
    }
  }

  return (
    <div>
      {selectedRuneArray[0]}
      <div>
      <img src={"/"+"r" + selectedRuneArray[0] + ".png"} onClick={button1pressed}/>
      <img src={"/"+"r" + selectedRuneArray[1] + ".png"} onClick={button2pressed}/>
      <img src={"/"+"r" + selectedRuneArray[2] + ".png"} onClick={button3pressed}/>
      <img src={"/"+"r" + selectedRuneArray[3] + ".png"} onClick={button3pressed}/>
      <img src={"/"+"r" + selectedRuneArray[4] + ".png"} onClick={button4pressed}/>
      <img src={"/"+"r" + selectedRuneArray[5] + ".png"} onClick={button5pressed}/>
      <img src={"/"+"r" + selectedRuneArray[6] + ".png"} onClick={button6pressed}/>
      <img src={"/"+"r" + selectedRuneArray[7] + ".png"} onClick={button7pressed}/>
      <img src={"/"+"r" + selectedRuneArray[8] + ".png"} onClick={button8pressed}/>
      </div>
      <a
        href="/Scoreboard"
        className="font bold mt-2 cursor-pointer rounded-2xl border-2 bg-yellow-300 px-1 pt-2"
      >
        Finish your attempt:
      </a>
    </div>
  )
}
export default Game3
