import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMovies } from '../redux/selectors/movies';

const MoviesList = ({ movies }) => {
  console.log(movies)
  return(
  <div className='movies-list'>
    Hello
  </div>
)};

const mapStateToProps = createStructuredSelector({
  movies: selectMovies
});

export default connect(mapStateToProps)(MoviesList);

//{movies.map((movie) => <MovieIcon src={movie.Poster} key={movie.Poster} movies={movies}/>)};