import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-servise-context';
import RandomPlanet from '../random-planet';
import { BrowserRouter as Routes, Route, Switch, Redirect } from 'react-router-dom';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from '../pages';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  state = {
    hasRenderError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onServiseChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  componentDidCatch() {
    this.setState({ hasRenderError: true });
  }

  render() {
    if (this.state.hasRenderError) {
      return <ErrorIndicator />;
    }

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Routes>
            <div className="srardb-app">
              <Header onServiseChange={this.onServiseChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route path="/login" render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
                <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn}/>} />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Routes>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
