import { useEffect } from "react";
import {
  GET_NOW_PLAYING_MOVIES_URL,
  TMDB_GET_OPTIONS,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const json = await fetch(GET_NOW_PLAYING_MOVIES_URL, TMDB_GET_OPTIONS);
    const data = await json.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
