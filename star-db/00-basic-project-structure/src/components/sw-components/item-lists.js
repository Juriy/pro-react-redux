import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiServise } from "../hoc-helpers";

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

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

const PersonList = withSwapiServise(
  mapPersonMethodsToProps
)(withData(withChildFunction(renderName)(ItemList)));

const PlanetList = withSwapiServise(
  mapPlanetMethodsToProps
)(withData(withChildFunction(renderName)(ItemList)));

const StarshipList = withSwapiServise(
  mapStarhipMethodsToProps
)(withData(withChildFunction(renderModelAndName)(ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
}