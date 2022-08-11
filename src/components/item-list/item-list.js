import React, { Component } from 'react';

import './item-list.css';
import { render } from '@testing-library/react';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = props.itemleList.map ((item) =>{
    
    const label = renderLabel(item);

    return(
      <li className="list-group-item modal-header"
       key={item.id} 
       onClick={ () => props.onItemSelected(item.id) }>
        {label}
      
      </li>
       
    );
  });
  
  return (

      <ul className="item-list modal-content">
        {items}
    </ul>
  );
  
}



export default ItemList;