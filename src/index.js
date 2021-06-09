import React from 'react';
import ReactDOM from 'react-dom';

import './application.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './components/app.jsx';

import moviesReducer from './reducers/movies_reducer';
const reducers = combineReducers({
  movies: moviesReducer
});

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
--REACT ONLY--
import React from 'react';
import ReactDOM from 'react-dom';

import './application.scss';
import reportWebVitals from './reportWebVitals';

import App from './components/app.jsx';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
