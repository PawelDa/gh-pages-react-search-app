import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';

class Movie extends Component {
  handleClick(event) {
    console.log(event.target.src)
    this.props.selectMovie(event.target.src);
  }

  render() {
    return (
      <img className='movie' alt='' src={this.props.src} onClick={this.handleClick.bind(this)}/>
    );
  }
}

function selectedFlatDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMovie: selectMovie },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedMovie: reduxState.selectedMovie
  }
}

export default connect(mapReduxStateToProps, selectedFlatDispatchToProps)(Movie);

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
