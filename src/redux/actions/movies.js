import { SET_MOVIES, SELECT_MOVIE } from "./types";
import { setMoviesList } from '../utils/apiCall';

export const setMovies = searchedQuery => ({
  type: SET_MOVIES,
  payload: setMoviesList(searchedQuery)
});

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  payload: movie
});
