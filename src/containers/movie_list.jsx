import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMovies } from '../actions/index';

import Movie from './movie';

class MovieList extends Component {
  componentWillMount() {
    this.props.setMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <div className='movie-list'>
        {movies.map((movie) => <Movie src={movie.Poster} key={movie.Poster} movies={movies}/>)};
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMovies: setMovies },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    movies: reduxState.movies
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MovieList);

/*
--ONLY REACT--
import React, { Component } from 'react';

import Movie from './movie';

class MovieList extends Component {
  renderList = () => {
    const { movies, selectMovie } = this.props
    if (movies) {
      return movies.map(({ Poster }) => <Movie src={Poster} key={Poster} selectMovie={selectMovie} movies={movies}/>);
    }
  }

  render() {
    return (
      <div className='movie-list'>
        {this.renderList()}
      </div>
    );
  }
}

export default MovieList;
*/
