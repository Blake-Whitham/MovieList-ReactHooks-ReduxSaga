import { SEARCH } from './actionTypes.js';

export function searchMovies(query) {
  return {
    type: SEARCH,
    payload: query,
  }
}