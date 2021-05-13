
import React, { useState } from 'react';
//redux

//Components
import MovieList from './movieList.jsx';

import AddMovie from './addMovie.jsx'
import Search from './search.jsx'

//########  APPLICATION  #########//

const App = () => {
  return (
    <div style={{'display': 'flex', 'flexDirection': 'column' }} >
      <AddMovie />
      <br />
      <Search />
      <br />
      <MovieList />
    </div>
  )
}
// store.subscribe(App)

export default App;