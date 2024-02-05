import { useDispatch } from "react-redux";
import { GET_POPULAR_MOVIES_URL, TMDB_GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const json = await fetch(GET_POPULAR_MOVIES_URL, TMDB_GET_OPTIONS);
    const data = await json.json();

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
