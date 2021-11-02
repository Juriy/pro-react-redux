import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../Row';

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

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
