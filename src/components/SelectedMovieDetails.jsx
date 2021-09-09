import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSelectedMovie } from '../redux/selectors/movies';
import { unselectMovie } from '../redux/actions/movies';

import '../assets/stylesheets/components/SelectedMovieDetails.scss';

class SelectedMovieDetails extends React.Component {
  render() {
    return (
      <div>
        {this.props.selectedMovie ? (
        <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
                <img
                src={`https://image.tmdb.org/t/p/w500/${this.props.selectedMovie.backdrop_path}`}
                className="img-fluid rounded-start"
                alt="..."
                style={{
                    maxHeight: 520
                }}
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title"><b>{this.props.selectedMovie.title}</b></h5>
                <p className="card-text">{this.props.selectedMovie.overview}</p>
                <p className="card-text">Release date: {this.props.selectedMovie.release_date}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Rating: {this.props.selectedMovie.vote_average} &#11088; ({this.props.selectedMovie.vote_count} votes)
                  </small>
                </p>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    this.props.unselectMovie()
                  }}
                >
                  Close
                </button>
                </div>
            </div>
            </div>
        </div>
        ) : (
        null
        )}
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  selectedMovie: selectSelectedMovie
});

const mapDispatchToProps = dispatch => ({
  unselectMovie: () => dispatch(unselectMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMovieDetails);
