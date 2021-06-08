import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <img className='movie' alt='' src='https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' />
    )
  }
}

export default Movie;

/*
--REACT ONLY--
import React, { Component } from 'react';

class Movie extends Component {
  handleClick(event) {
    const { movies, selectMovie } = this.props
    const movieSrc = event.target.src;
    const movieTitle = movies.find(movie => movie.Poster === event.target.src).Title;
    const movieYear = movies.find(movie => movie.Poster === event.target.src).Year;
    selectMovie(movieSrc, movieTitle, movieYear);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.src !== this.props.src;
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
*/
