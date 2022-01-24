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
  return <div></div>;
}

export default Gamenick;
