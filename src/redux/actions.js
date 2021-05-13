import { ADD_MOVIE, CHANGE_WATCHED, SEARCH } from './actionTypes.js';

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

export function changeWatched(title) {
  return {
    type: CHANGE_WATCHED,
    payload: title,
  }
}