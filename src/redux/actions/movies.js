import { SET_MOVIES } from "./types";
import { setMoviesList } from './index';

export const setMovies = searchedQuery => ({
  type: SET_MOVIES,
  payload: setMoviesList(searchedQuery)
});
