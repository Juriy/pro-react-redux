import React from 'react';

import './item-list.css';

const ItemList = (props) => {
  const {data, onItemSelected, children: renderLabel} = props
  const renderItems = (arr) => {
    return arr.map((item) => {
      const {id, name} = item;
      const label = renderLabel(item)
      return (
        <li 
          key={name} 
          className="list-group-item"
          onClick={() => {
            onItemSelected(id)
          }}>
          {label}
        </li>
      );
    });
  };
    
  const items = renderItems(data);
  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  )

}

ItemList.defaultProps = {
  onItemSelected: () => {}
}

export default ItemList;