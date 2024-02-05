import React from "react";
import GPTSearchInputBar from "./GPTSearchInputBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";

const GPTSearch = () => {
  return (
    <div className="flex items-center flex-col h-screen bg-black">
      <div className="mt-[10%] w-[50%]">
        <GPTSearchInputBar />
        <GPTSearchSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
