import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    gptSearchedMovies: null,
  },
  reducers: {
    toggleGPTSearchView: function (state, action) {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTSearchedMovies: function (state, action) {
      state.movieNames = action.payload.movieNames;
      state.gptSearchedMovies = action.payload.gptSearchedMovies;
    },
  },
});

export const { toggleGPTSearchView, addGPTSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;
