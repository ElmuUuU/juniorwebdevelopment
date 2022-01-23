import React from "react";

function Games() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img src="/1.png" alt="" width="1280" height="720" />
      <form action="http://www.acme.com/register" method="POST">
        <label for="name">Name</label>
        <input id="name" type="text" autocomplete="name" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Games;
