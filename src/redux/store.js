import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers/root-reducer';

const middlewares = [promiseMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
} 

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
