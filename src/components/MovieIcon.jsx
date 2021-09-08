import React from 'react';

import '../assets/stylesheets/components/MovieIcon.scss';

const MovieIcon = ({ movie }) => {
  const url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  console.log(url)
  return (
    <div className='card'>
      <img src={url} className='card-img-top' />
      <div className='card-body just'>
        <h5 className='card-title'>{movie.title}</h5>
        <a href="#" className="btn btn-primary">Movie Details</a>
      </div>
    </div>
  )
}

export default MovieIcon;
