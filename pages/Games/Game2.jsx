/* TODO

Finish initGame function ( Create html to draw game )
reduce lives global variable
determine what happens when game is won

*/

import React from "react";

function Gamenick() {
  var randomGame = Math.round(Math.random() * (3 - 1) + 1);
  var game = process.env.GAME_ID;
  game = "/Games/Game" + randomGame;
  var previousGame = parseInt(process.env.PREVIOUS_GAME);
  var randomString = Math.round(Math.random() * (3 - 1) + 1);
  function getRandomGame() {
    if ((previousGame = 0)) {
      randomString = Math.round(Math.random() * (3 - 2) + 2);
      previousGame = 1;
      game = "/Games/Game" + randomString;
    }
    return game;
  }
  var cell = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  var playerY;
  var playerX;
  var holdTyle = 0;
  var hasKey = false;
  var whichGame = 0;
  setupGame();
  initGame();
  //Generate Playing field
  //
  //  EmptySquare: 0
  //  Player: 1
  //  Key: 5
  //  Lock: 6
  //  Wall: 10
  //  Banana: 20
  //  EiffelTower: 30
  //
  function addWall(col, row) {
    cell[col][row] = 10;
  }
  function addBanana(col, row) {
    cell[col][row] = 20;
  }
  function addEiffelTower(col, row) {
    cell[col][row] = 30;
  }
  //Generate player location / win condition
  function generatePlayer() {
    var rngy = Math.floor(Math.random() * 4 + 1) * 2 - 2;
    var rngx = Math.floor(Math.random() * 4 + 1) * 2 - 2;
    if (cell[rngy][rngx] == 0) {
      cell[rngy][rngx] = 1;
      playerX = rngx;
      playerY = rngy;
    } else {
      generatePlayer();
    }
  }
  function generateKey() {
    var rngy = Math.floor(Math.random() * 4 + 1) * 2 - 2;
    var rngx = Math.floor(Math.random() * 4 + 1) * 2 - 2;
    if (cell[rngy][rngx] == 0) {
      cell[rngy][rngx] = 5;
    } else {
      generateKey();
    }
  }
  function generateLock() {
    var rngy = Math.floor(Math.random() * 4 + 1) * 2 - 2;
    var rngx = Math.floor(Math.random() * 4 + 1) * 2 - 2;
    if (cell[rngy][rngx] == 0) {
      cell[rngy][rngx] = 6;
    } else {
      generateLock();
    }
  }
  //Start game and set up board
  function initGame() {
    //draw game field
  }
  function setupGame() {
    // randomly select one set up, and set game accordingly
    var x = Math.floor(Math.random() * 8 + 1) - 1;
    whichGame = x;
    switch (x) {
      case 1: {
        addWall(0, 1);
        addWall(4, 1);
        addWall(6, 1);
        addWall(0, 3);
        addWall(2, 3);
        addWall(6, 3);
        addWall(6, 5);
        addWall(1, 6);
        addWall(3, 6);
        addBanana(2, 4);
        addEiffelTower(4, 2);
        break;
      }
      case 2: {
        addWall(0, 1);
        addWall(2, 1);
        addWall(2, 3);
        addWall(2, 5);
        addWall(5, 0);
        addWall(5, 2);
        addWall(5, 4);
        addWall(3, 2);
        addWall(1, 4);
        addBanana(0, 6);
        addEiffelTower(4, 2);
        break;
      }
      case 3: {
        addWall(1, 0);
        addWall(1, 2);
        addWall(4, 1);
        addWall(6, 1);
        addWall(0, 5);
        addWall(2, 5);
        addWall(3, 4);
        addWall(5, 4);
        addWall(5, 6);
        addBanana(0, 2);
        addEiffelTower(4, 6);
        break;
      }
      case 4: {
        addWall(1, 0);
        addWall(1, 2);
        addWall(1, 6);
        addWall(3, 0);
        addWall(5, 2);
        addWall(2, 3);
        addWall(4, 3);
        addWall(2, 5);
        addWall(6, 5);
        addBanana(0, 2);
        addEiffelTower(4, 6);
        break;
      }
      case 5: {
        addWall(1, 0);
        addWall(3, 0);
        addWall(5, 0);
        addWall(1, 2);
        addWall(3, 4);
        addWall(6, 3);
        addWall(6, 5);
        addWall(0, 5);
        addWall(2, 5);
        addBanana(0, 0);
        addEiffelTower(4, 4);
        break;
      }
      case 6: {
        addWall(0, 1);
        addWall(3, 0);
        addWall(5, 0);
        addWall(0, 5);
        addWall(5, 2);
        addWall(4, 3);
        addWall(5, 6);
        addWall(1, 4);
        addWall(2, 5);
        addBanana(2, 0);
        addEiffelTower(4, 2);
        break;
      }
      case 7: {
        addWall(0, 1);
        addWall(3, 0);
        addWall(5, 0);
        addWall(0, 3);
        addWall(0, 5);
        addWall(2, 3);
        addWall(4, 3);
        addWall(3, 6);
        addWall(5, 6);
        addBanana(2, 2);
        addEiffelTower(2, 6);
        break;
      }
      case 8: {
        addWall(1, 0);
        addWall(3, 0);
        addWall(4, 1);
        addWall(0, 3);
        addWall(0, 5);
        addWall(2, 3);
        addWall(2, 5);
        addWall(5, 4);
        addWall(6, 5);
        addBanana(6, 4);
        addEiffelTower(0, 4);
        break;
      }
    }
    generateLock();
    generateKey();
    generatePlayer();
  }
  function victoryConditionCheck() {
    if (holdTyle == 5) {
      hasKey = true;
    }
    if (hasKey == true && holdTyle == 6) {
      // game is won
    }
  }
  function moveX(direction) {
    //collisions with outer walls shall be ignored
    if (playerX + direction > 7 || playerX + direction < 0) {
    } else {
      if (cell[playerY][playerX + 0.5 * direction] == 10) {
        //reduce lives
      } else {
        cell[playerY][playerX] = holdTyle;
        playerX += direction;
        holdTyle = cell[playerY][playerX];
        cell[playerY][playerX] = 1;
        victoryConditionCheck();
        initGame();
      }
    }
  }
  function moveY(direction) {
    //collisions with outer walls shall be ignored
    if (playerY + direction > 7 || playerY + direction < 0) {
    } else {
      if (cell[playerY + 0.5 * direction][playerX] == 10) {
        //reduce lives
      } else {
        cell[playerY][playerX] = holdTyle;
        playerY += direction;
        holdTyle = cell[playerY][playerX];
        cell[playerY][playerX] = 1;
        victoryConditionCheck();
        initGame();
      }
    }
  }

  return (
    <div>
      {whichGame} + {cell}
    </div>
  );
}

export default Gamenick;
