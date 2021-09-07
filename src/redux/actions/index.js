export function setMoviesList(searchedQuery) {
  const apiKey = '48727053';
  const url = `https://www.omdbapi.com/?s=${searchedQuery}&apikey=${apiKey}`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.Search;
    });
}

export function selectMovie(movie) {
  return {
    type: 'SELECT_MOVIE',
    payload: movie
  };
}
/*
export function setMovies() {
  const apiKey = '48727053'
  const url = `https://www.omdbapi.com/?s=x-men&apikey=${apiKey}`
  fetch(url).then(response => response.json()).then((data) => {
    const movies = data.Search
    return {
      type: 'SET_MOVIES',
      payload: movies
    };
  });
}
*/
