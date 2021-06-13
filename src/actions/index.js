import movies from '../movies';

export function setMovies() {
  // TODO API call

  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}

export function selectMovie(movie) {
  return {
    type: 'SELECT_MOVIE',
    payload: movie
  }
}
