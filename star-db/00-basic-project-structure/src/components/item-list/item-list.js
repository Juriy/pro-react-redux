import React from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers/with-data';

const ItemList = (props) => {
  const {data, onItemSelected, children: renderLabel} = props
  const renderItems = (arr) => {
    return arr.map((item) => {
      const {id} = item;
      const label = renderLabel(item)
      return (
        <li 
          key={id} 
          className="list-group-item"
          onClick={() => onItemSelected(id)}>
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

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople);