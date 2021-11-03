import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

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

 const withData = (View, getData) => {
  return class extends Component {
    swapiService = new SwapiService()

    state = {
      data: null
    }
  
    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        })
    }

    render() {
      const {data} = this.state;
    
      if (!data) {
        return <Spinner />;
      }  

      return (
        <View {...this.props} data={data} />
      )
    }
  };
}

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople);