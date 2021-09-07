import React from 'react';

import MovieList from './components/movie_list';
import SearchBar from './components/search_bar';
import MovieDetails from './components/movie_details';

const App = () => (
  <div>
    <div className='left-side'>
      <SearchBar />
      <MovieDetails />
    </div>
    <div className='right-side'>
      <MovieList />
    </div>
  </div>
);

export default App;
