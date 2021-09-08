import { SET_MOVIES } from "./types";
import { setMoviesList } from '../utils/apiCall';

export const setMovies = searchedQuery => ({
  type: SET_MOVIES,
  payload: setMoviesList(searchedQuery)
});
