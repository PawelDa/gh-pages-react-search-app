import React from 'react';
import { connect } from 'react-redux';

import { selectMovie } from '../redux/actions/movies';

import '../assets/stylesheets/components/MovieIcon.scss';

const MovieIcon = ({ movie, selectMovie }) => {
  const url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (
    <div className='card'>
      <img src={url} alt='' className='card-img-top' />
      <div className='card-body just'>
        <h5 className='card-title'>{movie.title}</h5>
        <button
          className="btn btn-primary"
          onClick={() => {selectMovie(movie)}}
        >
          Movie Details
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  selectMovie: movie => dispatch(selectMovie(movie))
});

export default connect(null, mapDispatchToProps)(MovieIcon);
