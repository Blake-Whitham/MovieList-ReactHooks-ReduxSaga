import React from 'react';
import Items from './items.jsx'

const List = function(props) {
   return (
     <div>
       <Items data={props.data} click={props.click}/>
     </div>
   )
}

export default List