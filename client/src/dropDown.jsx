import React from 'react';

const DropDown = function (props) {
  return (
    <div id="dropDown">
      {props.data.map((result) => <div onClick={()=>props.click(result, props.cb)} className="result" key={result.id}>
        <div className="title">
          {result.title}
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

export default DropDown;

