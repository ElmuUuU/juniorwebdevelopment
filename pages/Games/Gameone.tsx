import React from "react";

function Games() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img src="/1.png" alt="" width="1280" height="720" />
      <form className="flex" action="/" method="POST">
        <label htmlFor="name" className="mt-4">
          Name
        </label>
        <input
          className="m-4"
          id="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Put in your Name here:"
        />
        <button type="submit">Next Game</button>
      </form>
    </div>
  );
}

export default Games;
