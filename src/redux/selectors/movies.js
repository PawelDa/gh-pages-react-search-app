import { createSelector } from "reselect";

const selectState = state => state;

export const selectMovies = createSelector(
  [selectState],
  state => state.movies
);

export const selectSelectedMovie = createSelector(
  [selectState],
  state => state.selectedMovie  
);
