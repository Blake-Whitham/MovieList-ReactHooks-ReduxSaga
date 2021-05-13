// import data from '../data.js'
import { ADD_MOVIE, SEARCH, TOGGLE_WATCHED } from '../actionTypes.js'


const initialState = {
  movies: {
    dummyMovie: { title: 'dummyMovie', watched: false },
    anotherMovie: { title: 'anotherMovie', watched: false },
   },
}

export default function (state = initialState, action) {
  const { movies } = state
  const { payload } = action

  let arr = {...movies}

  switch (action.type) {
    case SEARCH:
      let filtered = Object.entries(arr).filter(
        (movie) => movie[0].toLowerCase().includes(payload))
      if (filtered.length < 1) return initialState
      return { movies: Object.fromEntries(filtered) };

    case ADD_MOVIE:

      arr[payload] = { title: payload, watched: false }
      return { movies : arr }

    case TOGGLE_WATCHED:
      arr[payload].watched = !arr[payload].watched;
      return { movies : arr }

    default:
      return state;
  }
}