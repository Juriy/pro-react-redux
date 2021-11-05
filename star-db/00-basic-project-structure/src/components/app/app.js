import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../Item-details/item-details';
import { SwapiServiceProvider } from '../swapi-servise-context';
import RandomPlanet from '../random-planet';
import Row from '../row';

import { PeoplePage } from '../pages';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components"


export default class App extends Component {
  
  state = {
    hasRenderError: false,
    swapiService: new SwapiService()
  }

  onServiseChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  componentDidCatch() {
    this.setState({hasRenderError: true})
  }
  
  render() {
    const {
      getPerson, 
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.state.swapiService;

    if (this.state.hasRenderError) {
      return <ErrorIndicator />
    }

    const persenDetails = (
      <ItemDetails 
        itemId="11"
        getData={getPerson}
        getImageUrl={getPersonImage}>              
        <Record field={"gender"} label={"Gender:"} item={undefined} />
        <Record field={"birthYear"} label={"Birth Year:"} item={undefined} />
        <Record field={"eyeColor"} label={"Eye Color:"} item={undefined} />
      </ItemDetails>
    )

    const starhipDetails = (
      <ItemDetails 
        itemId="5"
        getData={getStarship}
        getImageUrl={getStarshipImage}>
          <Record field={"model"} label={"Model:"} item={undefined} />
          <Record field={"length"} label={"Length:"} item={undefined} />
          <Record field={"costInCredits"} label={"Cost:"} item={undefined} />          
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <SwapiServiceProvider
          value={this.state.swapiService}
        >
          <Header onServiseChange={this.onServiseChange} />
          <RandomPlanet />

          <PeoplePage />

          <Row
            left={<PlanetList />}
            right={<PlanetDetails itemId={11} />}
          />

          <Row
            left={<StarshipList />}
            right={<StarshipDetails itemId={11} />}
          />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};