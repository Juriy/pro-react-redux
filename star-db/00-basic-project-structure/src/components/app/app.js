import React, { Component } from 'react';

import './app.css';
import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../Item-details/item-details';
import ItemList from '../item-list';
import {
  PersonDetaild,
  PlanetDetaild,
  StarshipDetaild,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components"

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
    const {
      getPerson, 
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

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
        <Header />

        <PersonDetaild itemId={11}/>
        <StarshipDetaild itemId={5}/>
        <PlanetDetaild itemId={9}/>
        
        <PersonList 
          onItemSelected={this.onPersonSelected} >
          { ({name}) => <span>{name}</span> }
        </PersonList>    

        <PlanetList 
          onItemSelected={this.onPersonSelected} >
          { ({name}) => <span>{name}</span> }
        </PlanetList>    
        
        <StarshipList 
          onItemSelected={this.onPersonSelected} >
          { ({name}) => <span>{name}</span> }
        </StarshipList>    

      </ErrorBoundry>
    )
  };
};