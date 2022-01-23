import Image from "next/image";
import React from "react";

function Games() {
  let solutionsMap = new Map<string, string>([
    ["1a", "test1"],
    ["1b", "test2"],
    ["1c", "test3"],
    ["2a", "test4"],
    ["2b", "test5"],
    ["2c", "test1"],
    ["3a", "test2"],
    ["3b", "test3"],
    ["3c", "test4"],
    ["4a", "test5"],
  ]);

  var randomMap = Math.round(Math.random() * (5 - 1) + 1);
  var mapVariation = "";
  var solutionString;

  var randomString = Math.round(Math.random() * (3 - 1) + 1);
  switch (randomString) {
    case 1: {
      mapVariation = randomMap.toString() + "a";
      break;
    }
    case 2: {
      mapVariation = randomMap.toString() + "b";
      break;
    }
    case 3: {
      mapVariation = randomMap.toString() + "c";
      break;
    }
  }

  const mapSelection = `/public/${mapVariation}.png`;

  solutionString = solutionsMap.get(mapVariation)!;

  return (
    <div className="flex flex-col items-center justify-center w-full px-20 text-center">
      <p>Use Image No. {mapVariation}</p>
      <Image
        src={mapSelection}
        alt=""
        width="640px"
        height="360px"
        layout="fixed"
      />
      <form className="flex" method="POST">
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

export default Games;
