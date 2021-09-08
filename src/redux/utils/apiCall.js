export async function setMoviesList(searchedQuery) {
    const apiKey = '48727053';
    const url = `https://www.omdbapi.com/?s=${searchedQuery}&apikey=${apiKey}`;
    const response = await fetch(url)
      .then(response => response.json())
      .then((data) => data.Search);
    console.log(response);
    return response;
  };
  