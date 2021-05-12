
import React, { useState } from 'react';
//redux

//Components
import MovieList from './movieList.jsx';

import Form from './form.jsx'
//reducers
// import { searchMovies } from '../redux/reducers'
//########  APPLICATION  #########//

const App = () => {
  return (
    <>
      <Form
        // searchMovies={(query)=>action(searchMovies(query))}
      />
      <br/>
      <MovieList data={{}}/>
    </>
  )
}
// store.subscribe(App)

export default App;