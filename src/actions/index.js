import movies from '../movies';

export function setMovies() {
  // add API call

  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}
