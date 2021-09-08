import React, { Component } from 'react';

import '../assets/stylesheets/components/SearchBar.scss';

import { connect } from 'react-redux';
import { setMovies } from '../redux/actions/movies';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.setMovies(event.target.value);
  }

  render() {
    return (
      <div className='search-container'>
        <div className='form-search'>
          <input
            type='text'
            onChange={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies))
});

export default connect(null, mapDispatchToProps)(SearchBar);
