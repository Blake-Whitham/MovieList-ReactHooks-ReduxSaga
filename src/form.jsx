import React, { useState } from 'react';

import { connect } from 'react-redux'
import { searchMovies } from './redux/actions'

const Form = ({ searchMovies }) => {
  console.log(searchMovies)
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    searchMovies(query)
    setQuery('')
  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type='text'
          value={query}
          onChange={(e) =>setQuery(e.target.value)}
          placeholder='Search'
          required
        />
        <button
          type='submit'

        >Go!</button>
      </form>
    </div>
  )
}

export default connect(null, { searchMovies })(Form)