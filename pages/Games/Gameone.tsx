import Image from "next/image";
import React from "react";

function Games() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-20 text-center">
      <p>Use Image No. {random}</p>
      <Image src={source} alt="" width="640px" height="360px" layout="fixed" />
      <form className="flex" action={getAction()} method="POST">
        <label htmlFor="name" className="mt-4">
          Destination
        </label>
        <input
          className="m-4"
          id="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Put the place you think"
        />
        <button type="submit">Next Game</button>
      </form>
    </div>
  );
}

let randomArray = Array();
let random = Math.floor(Math.random() * 5 + 1);
randomArray.push(random);
let source = `/${random}.png`;
const numberOfGames = 3;
let gamesPlayed = 1;
let action = "/Games/Gameone";

function getAction() {
  randomArray.push(random);
  getArray();
  if (gamesPlayed <= numberOfGames) {
    gamesPlayed = gamesPlayed + 1;
    action = "/Games/Gameone";
  } else {
    gamesPlayed = 0;
    action = "/Games/Gametwo";
  }
  return action;
}

function getArray() {
  if (randomArray.includes(random)) {
    random = Math.floor(Math.random() * 5 + 1);
    source = `/${random}.png`;
  } else {
    return null;
  }
}

export default Games;
