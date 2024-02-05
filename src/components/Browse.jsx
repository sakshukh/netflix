import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

/**
 *
 * Main Container
 *    VideoContainer
 *    VideoTitle
 * SecondaryContainer
 *    List of Movies * n - horizontal scroll
 *      movie card * n
 */

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  usePopularMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="flex flex-col">
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
