import React from "react";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  console.log(movie);
  const { original_title, poster_path } = movie;
  return (
    <div className="w-48 mr-4">
      {/* <h1>{original_title}</h1> */}
      <div>
        <img
          className=""
          src={TMDB_IMAGE_URL + poster_path}
          alt="Movie Poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
