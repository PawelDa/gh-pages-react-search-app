import React, { Component } from 'react';

import Movie from './movie';

class MovieList extends Component {
  static defaultProps = {
    movies: [
      {
        "Title": "X-Men: Days of Future Past",
        "Year": "2014",
        "imdbID": "tt1877832",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "X-Men: First Class",
        "Year": "2011",
        "imdbID": "tt1270798",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg"
      },
      {
        "Title": "X-Men",
        "Year": "2000",
        "imdbID": "tt0120903",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "X2: X-Men United",
        "Year": "2003",
        "imdbID": "tt0290334",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg"
      },
      {
        "Title": "X-Men: The Last Stand",
        "Year": "2006",
        "imdbID": "tt0376994",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      },
      {
        "Title": "X-Men Origins: Wolverine",
        "Year": "2009",
        "imdbID": "tt0458525",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      },
      {
        "Title": "X-Men: Apocalypse",
        "Year": "2016",
        "imdbID": "tt3385516",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg"
      },
      {
        "Title": "X-Men",
        "Year": "1992–1997",
        "imdbID": "tt0103584",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "X-Men: Evolution",
        "Year": "2000–2003",
        "imdbID": "tt0247827",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWMyMThhN2UtMGMzYi00ODVmLWFlODItYmZlMzMxYzE3MmZkXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
      },
      {
        "Title": "Wolverine and the X-Men",
        "Year": "2008–2009",
        "imdbID": "tt0772145",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzk4Nzg3NjMyMV5BMl5BanBnXkFtZTcwMjk3MjU0Mg@@._V1_SX300.jpg"
      }
    ]
  }

  componentWillMount() {
    //TODO: dispach and action to update the redux state tree (movies)
  }

  render() {
    const { movies } = this.props;
    return (
      <div className='movie-list'>
        {movies.map((movie) => <Movie src={movie.Poster} key={movie.Poster} movies={movies}/>)};
      </div>
    );
  }
}

export default MovieList;

/*
--ONLY REACT--
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
*/
