const moviesReducer = (state, action) => {
  if (state === undefined) {
    return []
  }

  if (action.type === 'SET_MOVIES') {
    return action.payload;
  } else {
    return state;
  }
}

export default moviesReducer;
