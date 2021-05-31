import React, { Component } from 'react';

import SearchBar from './search_bar';
import Movie from './movie';
import MovieList from './movie_list';
import MovieDetails from './movie_details';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedMovie: {
        src: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
        title: 'Harry Potter and the Half-Blood Prince',
        year: '2009'
      }
    }

    this.search("harry potter");
  }

  search = (query) => {
    const apiKey = '48727053'
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    fetch(url).then(response => response.json()).then((data) => {
      const movies = data.Search
      this.setState({
        movies: movies
      })
    })
  }

  selectMovie = (movieSrc, movieTitle, movieYear) => {
    this.setState({
      selectedMovie: {
        src: movieSrc,
        title: movieTitle,
        year: movieYear
      }
    })
  }

  render() {
    return (
    <div>
      <div className='left-side'>
        <SearchBar searchFunction={this.search} />
        <div className='selected-movie card'>
          <Movie src={this.state.selectedMovie.src} className='card-img-top'/>
          <MovieDetails title={this.state.selectedMovie.title} year={this.state.selectedMovie.year} />
        </div>
      </div>
      <div className='right-side'>
        <MovieList movies={this.state.movies} selectMovie={this.selectMovie} />
      </div>
    </div>
    )
  }
}

export default App;
