const moviesReducer = (state, action) => {
  if (state === undefined) {
    return []
  }

  //if (action.type === 'SET_MOVIES') {
  //  return action.payload;
  //} else {
  // return state;
  //}

  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state
  }
}

export default moviesReducer;
