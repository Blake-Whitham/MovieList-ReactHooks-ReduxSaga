import React, { useState } from 'react';
import { connect } from 'react-redux';

import Movie from './movie.jsx';

const MovieList = (props) => {

const { movies } = props
  return (
    <div>
      <button>All</button>
      <button>Watched</button>
      <button>To Watch</button>
      {Object.values(movies).map((movie, idx) => {
        return (
          <Movie movie={movie.title} watched={movie.watched} key={idx} />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {

  const { movies } = state.movies;
  return {movies}
}

export default connect(mapStateToProps)(MovieList);