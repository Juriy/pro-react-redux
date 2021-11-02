import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../Item-details';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };
  
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList 
      onItemSelected={this.onPersonSelected} 
      getData={this.swapiService.getAllPeople}>
        {(item) => (
          `${item.name} (${item.birthYear})`
        )}
      </ItemList>
    )

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
