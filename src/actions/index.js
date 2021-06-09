import movies from '../movies';

export function setMovies() {
  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}
