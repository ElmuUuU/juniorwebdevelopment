import { randomInt } from "crypto";
import React from "react";

function Games() {
  let solutionsMap = new Map<string, string>([
    ["1a", "test1"],
    ["1b", "test2"],
    ["1c", "test3"],
    ["2a", "test4"],
    ["2b", "test5"],
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

  solutionString = solutionsMap.get(mapVariation)!;

  return <div>{mapVariation}</div>;
}

export default Games;
