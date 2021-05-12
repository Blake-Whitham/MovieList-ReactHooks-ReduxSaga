import React, { useState } from 'react';


const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('')

  function handleSubmit() {
    searchMovies(query)
    setQuery('')
  }

  return (
    <div>
      <form>
        <input
          type='text'
          value={query}
          onChange={(e) =>setQuery(e.target.value)}
          placeholder='Search'
        />
        <button
          type='button'
          onClick={handleSubmit}
        >Go!</button>
      </form>
    </div>
  )
}

export default Form