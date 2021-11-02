import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

import './app.css';
import SwapiService from '../../services/swapi-service';

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
    
    return (
      <div>
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
      </div>
    )
  };
};