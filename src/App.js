import React from 'react';

import SearchBar from './components/SearchBar';
import SelectedMovieDetails from './components/SelectedMovieDetails';
import MoviesList from './components/MoviesList';

const App = () => (
  <div>
    <SearchBar />
    <SelectedMovieDetails />
    <MoviesList />
  </div>
);

export default App;
