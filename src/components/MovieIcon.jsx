import React from 'react';

import '../assets/stylesheets/components/MovieIcon.scss';

const MovieIcon = ({ movie }) => {
  const url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  console.log(url)
  return (
    <div className='movie-icon'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${url})`  
        }}
      />
      <div className='content'>
        <span className='title'>{movie.title}</span>
      </div>
    </div>
  )
}

export default MovieIcon;
