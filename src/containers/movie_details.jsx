import React, { Component } from 'react';

class MovieDetails extends Component {
  render() {
    return (
      <div className='selected-movie card'>
        <img className='card-img-top' alt='' src={this.props.src}/>
        <div className='card-body movie-details'>
          <h3 className='card-title'>{this.props.title}</h3>
          <h4 className='card-text'>{this.props.year}</h4>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

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
