import React, { Component } from 'react';

import '../assets/stylesheets/components/SearchBar.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMovies } from '../redux/actions/movies';
import { selectMovies } from '../redux/selectors/movies';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.setMovies(event.target.value);
  }

  render() {
    console.log(this.props)
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

const mapStateToProps = (state) => ({
  movies: selectMovies(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
