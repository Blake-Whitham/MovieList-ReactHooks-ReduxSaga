import data from '../data.js'
import { SEARCH } from '../actionTypes.js'


const initialState = {
  movies: data,
}

export default function(state = initialState, action) {
  const { movies } = state
  const { payload } = action

  switch (action.type) {
    case SEARCH:
      let filtered = movies.slice().filter((movie) => movie.title.toLowerCase().includes(payload))
      if (filtered.length < 1) return initialState
      return { movies: filtered };
    default:
      return state;
  }
}