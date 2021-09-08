export function setMoviesList(searchedQuery) {
    const apiKey = '48727053';
    const url = `https://www.omdbapi.com/?s=${searchedQuery}&apikey=${apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        return data.Search;
      });
  };
  