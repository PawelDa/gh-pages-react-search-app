import React, { Component } from 'react';

class MovieDetails extends Component {
  render() {
    return (
      <div className='card-body'>
        <h3 className='card-title'>{this.props.title}</h3>
        <h4 className='card-text'>{this.props.year}</h4>
      </div>
    );
  }
}

export default MovieDetails;
