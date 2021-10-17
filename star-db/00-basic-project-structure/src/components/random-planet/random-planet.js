import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    diameter: null,
    id: null,
    name: null,
    population: null,
    rotation: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 21) + 2;
    this.swapiService
      .getPlanet(id)
      .then(({diameter, name, population, rotation_period: rotation}) => {
        this.setState({diameter, id, name, population, rotation});
      });
  }

  render() {
    const {diameter, id, name, population, rotation} = this.state;
    return [
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotation}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>,
    ];
  }
}
