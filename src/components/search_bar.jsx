import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input
        type='text'
        className='form-control form-search'
      />
    );
  }
}

export default SearchBar;

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
