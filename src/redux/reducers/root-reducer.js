import { combineReducers } from 'redux';

import moviesReducer from './movies-reducer';
import selectedMovieReducer from './selected-movie-reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;
