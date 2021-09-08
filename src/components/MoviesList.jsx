import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMovies } from '../redux/selectors/movies';

import MovieIcon from './MovieIcon';

import '../assets/stylesheets/components/MoviesList.scss';

const MoviesList = (state) => {
  console.log(state.movies)
  return(
  <div className='movies-list'>
    {state.movies.length ?
      state.movies.map(movie => 
        <MovieIcon key={movie.id} movie={movie} />
      ) : (
        null
      )}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  movies: selectMovies
});

export default connect(mapStateToProps)(MoviesList);
