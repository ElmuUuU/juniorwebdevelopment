import React from "react";
import { useState } from "react";

function Searchinput() {
  const [searchInput, setSearchInput] = useState("");
  const resetInput = () => {
    setSearchInput("");
  };
  return (
    <div className="items-center justify-center text-center">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        type="text"
        placeholder={"Start your search"}
      />
    </div>
  );
}

export default Searchinput;
