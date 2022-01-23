import React from "react";

function Games() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img src="/1.png" alt="" width="1280" height="720" />
      <form action="/" method="POST">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" autoComplete="name" required />
        <button type="submit">Next Game</button>
      </form>
    </div>
  );
}

export default Games;
