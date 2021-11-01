import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService()

  state = {
    pipleList: null
  }

  componentDidMount() {
    const {getData} = this.props;
    getData()
        .then((pipleList) => {
          this.setState({
            pipleList
          });
        })
  }

  renderItems = (arr) => {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item)
      return (
        <li 
          key={id} 
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  };
    
  render() {
    const {renderItems} = this;
    const {pipleList} = this.state;
    
    if (!pipleList) {
      return <Spinner />;
    }

    const items = renderItems(pipleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
