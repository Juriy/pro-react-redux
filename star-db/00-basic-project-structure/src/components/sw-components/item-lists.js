import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiServise } from "../hoc-helpers";

const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiServise(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const PlanetList = withSwapiServise(withData(withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);
const StarshipList = withSwapiServise(withData(withChildFunction(ItemList, renderModelAndName)), mapStarhipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
}