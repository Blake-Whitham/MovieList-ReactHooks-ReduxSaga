import React from 'react';

import { connect } from 'react-redux';

import { toggleWatched } from './redux/actions.js'

const Movie = ({ movie, watched, toggleWatched }) => {


  return (
    <div className='movies'>
      {movie}
      {<button
        onClick={()=>toggleWatched(movie)}
      >{watched ? 'Watched': 'To Watch'}</button>}
    </div>
  )
}

export default connect(null, { toggleWatched })(Movie);