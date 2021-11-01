import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
  this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList 
      onItemSelected={this.onPersonSelected} 
      getData={this.swapiService.getAllPeople}
      renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`} />
    )

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          {itemList}
        </div>
        <div className="col-md-6">
          {personDetails}
        </div>
      </div>
    );
  }
}
