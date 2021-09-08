import { apiKey } from "../../assets/data/theMovieDBApi";

export async function setMoviesList(searchedQuery) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchedQuery}`
  const response = await fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .catch(() => {
      return null;
    });
  return response;
};
