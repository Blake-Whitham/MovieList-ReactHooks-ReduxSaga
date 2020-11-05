import React from 'react';

const Items = function (props) {
  return (
    <div id="list">
      {props.data.map((result, i, array) => <div onClick={()=>props.click(i, result.id, array)} className="result" key={result.id}>
        <div className="title">
          {result.title}
          <div className="label">{result.watched ? <button className="watched">Watched</button> : ''}</div>
        </div>
        <div className="description">
          {result.overview}
        </div>
        <div className="date">
          {result.release_date}
        </div>
        <img className="image" src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}></img>
      </div>)}
    </div>
  )
}

export default Items
