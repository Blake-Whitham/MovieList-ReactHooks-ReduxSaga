import React from 'react';

import { connect } from 'react-redux';

import { changeWatched } from './redux/actions.js'

const Movie = ({ movie, watched, idx, changeWatched }) => {


  return (
    <div className='movies'>
      {movie}
      {<button
        onClick={()=>changeWatched(movie)}
      >{watched ? 'Watched': 'To Watch'}</button>}
    </div>
  )
}

export default connect(null, { changeWatched })(Movie);