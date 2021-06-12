const selectedMovieReducer = (state, action) => {
    if (state === undefined) {
      return null;
    }
  
    // if (action.type === 'SET_MOVIES') {
    //  return action.payload;
    // } else {
    // return state;
    // }
    switch (action.type) {
      case 'SELECT_MOVIE':
        return action.payload;
      default:
        return state
    }
  }
  
  export default selectedMovieReducer;
  