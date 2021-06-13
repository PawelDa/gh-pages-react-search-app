import React, { Component } from 'react';

import MovieList from '../containers/movie_list';
import SearchBar from './search_bar';
import MovieDetails from '../containers/movie_details';

class App extends Component {
  static defaultProps = {
    selectedMovie: {
      src: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
      title: 'Harry Potter and the Half-Blood Prince',
      year: '2009'
    }
  }

  render() {
    return (
      <div>
        <div className='left-side'>
          <SearchBar />
          <MovieDetails title={this.props.selectedMovie.title} year={this.props.selectedMovie.year} src={this.props.selectedMovie.src}/>
        </div>
        <div className='right-side'>
          <MovieList />
        </div>
      </div>
    );
  }
}

export default App;

/*
--ONLY REACT--
import React, { Component } from 'react';

import MovieList from '../containers/movie_list';
import SearchBar from './search_bar';
import Movie from './movie';
import MovieDetails from './movie_details';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedMovie: {
        src: null, //'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
        title: null, //'Harry Potter and the Half-Blood Prince',
        year: null //'2009'
      }
    }

    this.search("x-men");
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
*/
