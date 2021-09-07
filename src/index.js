import React from 'react';
import ReactDOM from 'react-dom';

import './application.scss';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './App';
import moviesReducer from './reducers/movies_reducer';
import selectedMovieReducer from './reducers/selected_movie_reducer';

const reducers = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});

const middlewares = applyMiddleware(promiseMiddleware);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  root);
