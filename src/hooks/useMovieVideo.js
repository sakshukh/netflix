import { useEffect, useState } from "react";
import { GET_MOVIE, TMDB_GET_OPTIONS } from "../utils/constants";

const useMovieVideo = (id) => {
  const [movie, setMovie] = useState(null);

  const getMovieVideo = async () => {
    const json = await fetch(GET_MOVIE + id + "/videos", TMDB_GET_OPTIONS);
    const data = await json.json();

    const filteredData = data.results?.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];

    setMovie(trailer);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return movie;
};

export default useMovieVideo;
