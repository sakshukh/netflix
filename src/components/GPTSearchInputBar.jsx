import React from "react";

const GPTSearchInputBar = () => {
  return (
    <form className="z-10 grid grid-cols-12 text-white">
      <input
        className="py-2 px-2 col-span-9 border-2 border-red-700 text-sm focus:outline-none text-black"
        type="text"
        placeholder="what whould you like to watch today?"
      />
      <button className="py-2 col-span-3 bg-red-700 font-bold">Search</button>
    </form>
  );
};

export default GPTSearchInputBar;
