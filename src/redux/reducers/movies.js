import data from '../data.js'
import { SEARCH } from '../actionTypes.js'


const initialState = {
  movies: data,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      // console.log(action)
      return { movies: search(data, action.payload) };
    default:
      return state;
  }
}