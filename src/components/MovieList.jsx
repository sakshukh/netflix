import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="md:ml-8 ml-3">
      <h1 className="font-bold md:text-3xl md:py-6 py-3 text-xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex mx-0">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
