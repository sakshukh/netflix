export const APP_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const TMDB_GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const GET_POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const GET_NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const GET_TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated";

export const GET_UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming";

export const GET_MOVIE = "https://api.themoviedb.org/3/movie/";

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

export const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const languageConstants = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
