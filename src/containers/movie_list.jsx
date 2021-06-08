import React, { Component } from 'react';

import Movie from './movie';

class MovieList extends Component {
  renderList = () => {
    const { movies, selectMovie } = this.props
    if (movies) {
      return movies.map(({ Poster }) => <Movie src={Poster} key={Poster} selectMovie={selectMovie} movies={movies}/>);
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
