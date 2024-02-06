import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggestions = () => {
  const gptData = useSelector((store) => store.gpt);

  if (!gptData.movieNames) return null;

  return (
    <div className="text-white bg-black">
      {gptData.movieNames.map((m, index) => (
        <MovieList
          key={index}
          title={m}
          movies={gptData.gptSearchedMovies[index]}
        />
      ))}
    </div>
  );
};

export default GPTSearchSuggestions;
