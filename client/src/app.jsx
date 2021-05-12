import "regenerator-runtime/runtime";

import React from 'react';
//redux
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers.js'
//saga
import sagas from './sagas.js'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
//redux store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

const action = (type) => store.dispatch({ type })

//########  APPLICATION  #########//
import MovieList from './movieList.jsx';

const App = ({}) => {

  return (
    <MovieList data={store.getState()}/>
  )
}
store.subscribe(App)

export default App;