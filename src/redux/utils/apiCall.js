import { apiKey } from "../../assets/data/theMovieDBApi";

export async function setMoviesList(searchedQuery) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchedQuery}`
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch(err) {
    return console.error(err);
  }
};
