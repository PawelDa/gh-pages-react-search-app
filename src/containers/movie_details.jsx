import React, { Component } from 'react';

import { connect } from 'react-redux';

class MovieDetails extends Component {
  render() {
    if(this.props.selectedMovie) {
      return (
        <div className='selected-movie card'>
          <img className='card-img-top' alt='' src={this.props.selectedMovie.src}/>
          <div className='card-body movie-details'>
            <h3 className='card-title'>{this.props.selectedMovie.title}</h3>
            <h4 className='card-text'>{this.props.selectedMovie.year}</h4>
          </div>
        </div>
      );
    } else { return (null)}
  }
}

function selectedMovieToProps(state) {
  return { selectedMovie: state.selectedMovie }
}

export default connect(selectedMovieToProps)(MovieDetails);

/*
<img className='card-img-top' alt='' src={this.props.src}/>

--ONLY REACT--
import React, { Component } from 'react';

class MovieDetails extends Component {
  render() {
    const { title, year } = this.props;
    if (!title && !year) {
      return null;
    }

    return (
      <div className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <h4 className='card-text'>{year}</h4>
      </div>
    );
  }
}

export default MovieDetails;
*/
