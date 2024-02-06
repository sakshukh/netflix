import React from "react";
import GPTSearchInputBar from "./GPTSearchInputBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";

const GPTSearch = () => {
  return (
    <div className="flex items-center flex-col h-screen bg-black w-screen ">
      <div className="mt-[60%] w-screen md:mt-[10%]">
        <GPTSearchInputBar />
        <GPTSearchSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
