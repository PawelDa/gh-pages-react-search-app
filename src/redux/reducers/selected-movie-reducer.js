import { SELECT_MOVIE, UNSELECT_MOVIE } from '../actions/types';

const initialState = null;

const selectedMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
    case UNSELECT_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

export default selectedMovieReducer;
