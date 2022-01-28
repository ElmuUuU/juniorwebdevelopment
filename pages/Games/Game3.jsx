import React from "react";

function Game3() {
  var array = [];
  var randomRuneArray = Math.round(Math.random() * (10 - 1));
  var Arrays = new Array();
  Arrays[0] = new Array(4, 7, 8, 3, 10, 5, 11, 13, 2);
  Arrays[1] = new Array(11, 3, 13, 9, 14, 4, 6, 8, 15);
  Arrays[2] = new Array(11, 6, 4, 12, 5, 9, 10, 2, 1);
  Arrays[3] = new Array(7, 10, 9, 3, 2, 6, 12, 13, 11);
  Arrays[4] = new Array(3, 6, 11, 9, 7, 10, 12, 2, 4);
  Arrays[5] = new Array(10, 13, 5, 9, 2, 3, 12, 15, 4);
  Arrays[6] = new Array(1, 14, 11, 7, 2, 6, 10, 9, 12);
  Arrays[7] = new Array(12, 10, 3, 11, 4, 13, 7, 15, 8);
  Arrays[8] = new Array(1, 5, 3, 7, 15, 4, 11, 6, 12);
  Arrays[9] = new Array(12, 9, 14, 7, 11, 5, 3, 10, 15);
  var selectedRuneArray = Arrays[randomRuneArray];
  var sortedArray = [];
  for (var i = 0; i < selectedRuneArray.length; i++) {
    sortedArray.push(selectedRuneArray[i]);
  }
  shuffle(sortedArray);
  var button1number = sortedArray[0];
  var button2number = sortedArray[1];
  var button3number = sortedArray[2];
  var button4number = sortedArray[3];
  var button5number = sortedArray[4];
  var button6number = sortedArray[5];
  var button7number = sortedArray[6];
  var button8number = sortedArray[7];
  var button9number = sortedArray[8];
  var isActive1 = true;
  var isActive2 = true;
  var isActive3 = true;
  var isActive4 = true;
  var isActive5 = true;
  var isActive6 = true;
  var isActive7 = true;
  var isActive8 = true;
  var isActive9 = true;
  function button1pressed() {
    if (isActive1) {
      array.push(button1number);
      isActive1 = false;
    }
  }
  function button2pressed() {
    if (isActive2) {
      array.push(button2number);
      isActive2 = false;
    }
  }
  function button3pressed() {
    if (isActive3) {
      array.push(button3number);
      isActive3 = false;
    }
  }
  function button4pressed() {
    if (isActive4) {
      array.push(button4number);
      isActive4 = false;
    }
  }
  function button5pressed() {
    if (isActive5) {
      array.push(button5number);
      isActive5 = false;
    }
  }
  function button6pressed() {
    if (isActive6) {
      array.push(button6number);
      isActive6 = false;
    }
  }
  function button7pressed() {
    if (isActive7) {
      array.push(button7number);
      isActive7 = false;
    }
  }
  function button8pressed() {
    if (isActive8) {
      array.push(button8number);
      isActive8 = false;
    }
  }
  function button9pressed() {
    if (isActive9) {
      array.push(button9number);
      isActive9 = false;
    }
  }
  function checkButton() {
    if (array == selectedRuneArray) {
      //win condition
    } else {
      //You lose! (lives--)
    }
  }
  function resetButton() {
    array = [];
    isActive1 = true;
    isActive2 = true;
    isActive3 = true;
    isActive4 = true;
    isActive5 = true;
    isActive6 = true;
    isActive7 = true;
    isActive8 = true;
    isActive9 = true;
  }
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  return (
    <div>
      {randomRuneArray} + {selectedRuneArray} + {sortedArray}
    </div>
  );
}
export default Game3;
