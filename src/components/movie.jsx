import React, { Component } from 'react';

class Movie extends Component {
  handleClick = (event) => {
    const movieSrc = event.target.src;
    const movieTitle = this.props.movies.find(movie => movie.Poster === event.target.src).Title;
    const movieYear = this.props.movies.find(movie => movie.Poster === event.target.src).Year;
    this.props.selectMovie(movieSrc, movieTitle, movieYear);
  }

  render() {
    return (
      <img
        alt=""
        src={this.props.src}
        className='movie'
        onClick={this.handleClick}
        movies={this.props.movies}/>
    );
  }
}

export default Movie;
