import React from 'react';

import '../assets/stylesheets/components/MovieIcon.scss';

const MovieIcon = (props) => (
  <div className='card-container'>
    <h2> {props.title} </h2>
    <p> {props.release_date} </p>
  </div>
);

export default MovieIcon;
