import React, { Component } from 'react';

import Movie from './movie';

class MovieList extends Component {
  renderList = () => {
    if (this.props.movies) {
      return this.props.movies.map(movie => <Movie src={movie.Poster} key={movie.Poster} selectMovie={this.props.selectMovie} movies={this.props.movies}/>);
    }
  }

  render() {
    return (
      <div className='movie-list'>
        {this.renderList()}
      </div>
    );
  }
}

export default MovieList;
