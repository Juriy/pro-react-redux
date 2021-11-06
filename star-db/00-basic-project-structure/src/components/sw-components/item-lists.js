import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiServise,
  withChildFunction,
  compose
} from '../hoc-helpers';


const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarhipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = compose(
  withSwapiServise(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiServise(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiServise(mapStarhipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}