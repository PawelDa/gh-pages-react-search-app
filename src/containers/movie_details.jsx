import React, { Component } from 'react';

class MovieDetails extends Component {
  static defaultProps = {
    selectedMovie: {
      src: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
      title: 'Harry Potter and the Half-Blood Prince',
      year: '2009'
    }
  }

  render() {
    return (
      <div className='selected-movie card'>
        <img className='card-img-top' alt='' src={this.props}/>
        <div className='card-body movie-details'>
          <h3 className='card-title'>{this.element}</h3>
          <h4 className='card-text'>{this.defaultProps}</h4>
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
