import React from 'react';

const Items = function(props) {

  return (
    <div id="list">
      {props.data.map((item, i, array) => <div onClick={()=>props.click(i, item.id, array)} className="movies" key={item.id} >{item.title}<div className="label">{item.watched ? <button className="watched">Watched</button> : ''}</div></div>)}
    </div>
  )
}

export default Items