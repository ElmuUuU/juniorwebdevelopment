import React from "react";

function Game3() {
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

  var selectedRuneArray = new Array();
  selectedRuneArray = Arrays[randomRuneArray];

  return <div>{selectedRuneArray}</div>;
}
export default Game3;
