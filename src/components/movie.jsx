import React, { Component } from 'react';

class Movie extends Component {
  handleClick(event) {
    const { movies, selectMovie } = this.props
    const movieSrc = event.target.src;
    const movieTitle = movies.find(movie => movie.Poster === event.target.src).Title;
    const movieYear = movies.find(movie => movie.Poster === event.target.src).Year;
    selectMovie(movieSrc, movieTitle, movieYear);
  }

  render() {
    const { src, movies } = this.props
    if (!src) {
      return null;
    }

    return (
      <img
        alt=""
        src={src}
        className='movie'
        onClick={this.handleClick.bind(this)}
        movies={movies}/>
    );
  }
}

export default Movie;
