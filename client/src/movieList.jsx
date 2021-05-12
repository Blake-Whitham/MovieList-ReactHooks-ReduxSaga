import React from 'react';

import Movie from './movie.jsx';

const MovieList = ({data}) => {

  return (
    <ul>
      {data.map((movie, idx) => {
        return (
          <Movie movie={movie} key={idx} />
        )
      })}
    </ul>
  )
}
export default MovieList;