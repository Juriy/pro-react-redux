import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorButton from '../error-button/error-button';

const Record = ({label, field}) => {
  return (
    <li className="list-group-item">
      <span className="term">{field}</span>
      <span>{label}</span>
    </li>    
  )  
}

export {
  Record
}

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    hasLoading: false,
    image: null,
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }
    
    this.setState({hasLoading: true})
    getData(itemId)
      .then((item) => {
        this.setState({
          item, 
          hasLoading: false,
          image: getImageUrl(item),
        });
      })     
  }

  componentDidMount() {
    this.updateItem()
  }
  
  render() {
    const ItemDetailsContent = ({item}) => {
      const {id, name, gender, birthYear, eyeColor} = item;
      const {image} = this.state
    
      return (
        <React.Fragment>
          <img className="Item-image" alt=""
          src={image} />
    
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child, idx) => {
                  return <li>{idx}</li> 
                })
              }
            </ul>
            <ErrorButton />
          </div>
        </React.Fragment>
      )
    }

    const {item, hasLoading} = this.state
    const hasData = item && !hasLoading;
    
    const lolderIndicator = hasLoading ? <Spinner />: null;
    const content = hasData ? <ItemDetailsContent item={item} /> : null;
    const emptyContent = item ? null: <EmptyContent />;
    
    return (
      <div className="item-details card">
        {lolderIndicator}
        {content}
        {emptyContent}
      </div>
    )
  }
}



const EmptyContent = () => {
  return <span>Select a Item from a list</span>;
}