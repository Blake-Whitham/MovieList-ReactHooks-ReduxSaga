import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addMovie } from './redux/actions';

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addMovie(movie);
    setMovie('');
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e)} >
      <input
        type='text'
        required
        placeholder='Add movie title here'
        onChange={(e)=>setMovie(e.target.value)}
        value={movie}
      />
      <button
        type='submit'
      >Add</button>
    </form>
  );

};

export default connect(null, { addMovie })(AddMovie);
