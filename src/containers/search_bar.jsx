import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMovies } from '../actions/index';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.setMovies(event.target.value);
  }

  render() {
    return (
      <input
        type='text'
        className='form-control form-search'
        onChange={this.handleUpdate}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMovies: setMovies },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    movies: reduxState.movies
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(SearchBar);

/*
import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <input
        type='text'
        className='form-control form-search'
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
*/
