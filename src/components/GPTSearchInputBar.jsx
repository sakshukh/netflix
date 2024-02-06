import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import { openai } from "../utils/openaiConfig";
import { TMDB_GET_OPTIONS } from "../utils/constants";
import MovieList from "./MovieList";
import { addGPTSearchedMovies } from "../redux/gptSlice";

const GPTSearchInputBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const fetchSearchedMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      TMDB_GET_OPTIONS
    );
    const json = await data.json();

    //<MovieList title={searchInput.current.value} movies={json.results} />}
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    /** 
    const gptSearchQuery =
      "Give me some recommendations of the movies which are related to " +
      searchInput.current.value +
      ". The recommendations should contain only 5 movies which are seperated using comma (,). It should look like this following example: Don, 3 idiots, koi mil gaya, main hoon naa, Drishyam";
    console.log(openai);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearchQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
    */

    const movieNames = searchInput.current.value.split(","); // retuns a list of names of movies

    const moviePromise = movieNames.map((movie) => fetchSearchedMovie(movie));

    console.log(moviePromise);

    const movies = await Promise.all(moviePromise);

    dispatch(
      addGPTSearchedMovies({
        movieNames: movieNames,
        gptSearchedMovies: movies,
      })
    );
  };

  return (
    <form
      className="z-10 grid grid-cols-12 text-white md:w-[50%] mx-auto w-full p-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="py-2 px-2 col-span-9 border-2 border-red-700 text-sm focus:outline-none text-black"
        type="text"
        placeholder={lang[selectedLanguage].gptInputPlaceholder}
        ref={searchInput}
      />
      <button
        className="py-2 col-span-3 bg-red-700 font-bold"
        onClick={handleGPTSearchClick}
      >
        {lang[selectedLanguage].search}
      </button>
    </form>
  );
};

export default GPTSearchInputBar;
