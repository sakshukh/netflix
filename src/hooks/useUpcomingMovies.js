import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { GET_UPCOMING_MOVIES_URL, TMDB_GET_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  async function getUpcomingMovies() {
    const data = await fetch(GET_UPCOMING_MOVIES_URL, TMDB_GET_OPTIONS);
    const upcomingMovies = await data.json();

    dispatch(addUpcomingMovies(upcomingMovies.results));
  }
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
