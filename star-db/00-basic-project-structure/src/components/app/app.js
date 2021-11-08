import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-servise-context';
import RandomPlanet from '../random-planet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
} from '../pages';

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
    if (this.state.hasRenderError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="srardb-app">
            <Header onServiseChange={this.onServiseChange} />
            <RandomPlanet />
            <BrowserRouter>
              <Routes>                  
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
              </Routes>
            </BrowserRouter>                    
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};