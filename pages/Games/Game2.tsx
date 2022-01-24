/* TODO

Finish initGame function ( Create html to draw game )
reduce lives global variable
win condition (key to lock)
Add more Playing field variations
Add random playing field selector

*/

import React from "react";

function Gamenick() {
  var randomGame = Math.round(Math.random() * (3 - 1) + 1);
  var game = process.env.GAME_ID;

  game = `/Games/Game${randomGame}`;
  var previousGame = parseInt(process.env.PREVIOUS_GAME!);
  var randomString = Math.round(Math.random() * (3 - 1) + 1);
  function getRandomGame() {
    if ((previousGame = 0)) {
      randomString = Math.round(Math.random() * (3 - 2) + 2);
      previousGame = 1;
      game = `/Games/Game${randomString}`;
    }
    return game;
  }

  var cell: number[][];
  var playerY: number;
  var playerX: number;
  var holdTyle = 0;
  var hasKey = false;

  setupGame();
  initGame();
  moveY(2);

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


  function addWall(col: number, row: number) {
    cell[col][row] = 10;
  }
  function addBanana(col: number, row: number) {
    cell[col][row] = 20;
  }
  function addEiffelTower(col: number, row: number) {
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
    //fill whole array with 0

    for (let i = 0; i < 6; i++) {
      for (let u = 0; u < 6; u++) {
        cell[i][u] = 0;
      }
    }

    // randomly select one before that. Case 1 represents the first setup on the PowerPoint, I defaulted it to 1; different set-ups have to be added
    var x = 1;
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
    }
    generateLock();
    generatePlayer();
  }
  function victoryConditionCheck() {
      if (holdTyle== 5) {
        hasKey=true;
      }
      if (hasKey==true && holdTyle==6) {
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
        cell[playerY][playerX] = holdTyle;
        playerX += direction;
        holdTyle = cell[playerY][playerX];
        cell[playerY][playerX] = 1;
        victoryConditionCheck();
        initGame();
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
        cell[playerY][playerX] = holdTyle;
        playerY += direction;
        holdTyle = cell[playerY][playerX];
        cell[playerY][playerX] = 1;
        victoryConditionCheck();
        initGame();
      }
    }
  }

  
  return <div>Test</div>;
}