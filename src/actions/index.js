import movies from '../movies';

export function setMovies() {
  // TODO API call

  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}

export function selectMovie(value) {
  console.log(value)
  return {
    type: 'SELECT_MOVIE',
    payload: value
  }
}
