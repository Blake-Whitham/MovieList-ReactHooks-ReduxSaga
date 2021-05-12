import React from 'react';

//data
import data from './data'
// components
import MovieList from './movieList.jsx';

const App = ({}) => {

  return (
    <MovieList data={data}/>
  )
}
export default App;