import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import ItemDetails from '../Item-details';

export default class App extends Component {
  
  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasRenderError: false,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };  

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  componentDidCatch() {
    this.setState({hasRenderError: true})
  }
  
  render() {
    if (this.state.hasRenderError) {
      return <ErrorIndicator />
    }

    const {getPerson, getStarship} = this.swapiService;

    const persenDetails = (
      <ItemDetails 
        itemId="11"
        getData={getPerson}
        getImageUrl={() => {}} />
    )

    const starhipDetails = (
      <ItemDetails 
        itemId="5"
        getData={getStarship}
        getImageUrl={() => {}} />
    )
    
    return (
      <ErrorBoundry>
        <Header />
        <Row left={persenDetails} right={starhipDetails}/>
        {/* <RandomPlanet /> */}
        {/* <ErrorButton /> */}
        {/* <PeoplePage /> */}
      </ErrorBoundry>
    )
  };
};