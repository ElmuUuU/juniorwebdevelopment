import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Hero() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="px-2 md:px-4 mx-auto max-w-7xl">
      <div className="mx-auto text-center ">
        <h1 className="text-2xl font-bold text-center">Game:</h1>
        <a href="../games">Start the game</a>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={"Enter your code here"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
