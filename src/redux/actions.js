import { ADD_MOVIE, SEARCH, TOGGLE_WATCHED } from './actionTypes.js';

export function searchMovies(query) {
  return {
    type: SEARCH,
    payload: query,
  }
}

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    payload: movie,
  }
}

export function toggleWatched(title) {
  return {
    type: TOGGLE_WATCHED,
    payload: title,
  }
}