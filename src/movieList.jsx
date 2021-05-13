import React, { useState } from 'react';
import { connect } from 'react-redux';

import Movie from './movie.jsx';

const MovieList = (props) => {

  const { movies } = props

  let list;
  const [filter, setFilter] = useState(null)
  if (filter === null) list = Object.values(movies)
  if (filter === true) list = Object.values(movies).filter(movie=>movie.watched === true)
  if (filter === false) list = Object.values(movies).filter(movie=>movie.watched === false)


  return (
    <div>
      <button onClick={()=>setFilter(null)}>All</button>
      <button onClick={()=>setFilter(true)}>Watched</button>
      <button onClick={()=>setFilter(false)}>To Watch</button>
      {
      list.map((movie, idx) => {
        return (
          <Movie
            filter={filter}
            key={idx}
            movie={movie.title}
            watched={movie.watched}
          />
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