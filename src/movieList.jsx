import React, { useState } from 'react';
import { connect } from 'react-redux';

import Movie from './movie.jsx';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, idx) => {
        return (
          <Movie movie={movie} key={idx} />
        )
      })}
    </ul>
  )
}
const mapStateToProps = state => {
  const { movies } = state;
  return movies
}
export default connect(
  mapStateToProps,
  null,
)(MovieList);