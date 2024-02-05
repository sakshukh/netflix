import React, { useEffect } from "react";
import { GET_TOP_RATED_MOVIES_URL, TMDB_GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  async function getTopRatedMovies() {
    const data = await fetch(GET_TOP_RATED_MOVIES_URL, TMDB_GET_OPTIONS);
    const topRatedMovies = await data.json();

    dispatch(addTopRatedMovies(topRatedMovies.results));
  }
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
