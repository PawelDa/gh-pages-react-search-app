import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSelectedMovie } from '../redux/selectors/movies';

import '../assets/stylesheets/components/SelectedMovieDetails.scss';

const SelectedMovieDetails = ({ selectedMovie }) => {
  console.log(selectedMovie);
  return (
    <div>
      {selectedMovie ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
                className="img-fluid rounded-start"
                alt="..."
                style={{
                  maxHeight: 400
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"><b>{selectedMovie.title}</b></h5>
                <p className="card-text">{selectedMovie.overview}</p>
                <p className="card-text">Release date: {selectedMovie.release_date}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Rating: {selectedMovie.vote_average} &#11088; ({selectedMovie.vote_count} votes)
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedMovie: selectSelectedMovie
})

export default connect(mapStateToProps)(SelectedMovieDetails);
