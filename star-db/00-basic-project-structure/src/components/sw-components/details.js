import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPerson,
  getStarship,
  getPlanet,
  getPersonImage,
  getStarshipImage,
  getPlanetImage,
} = swapiService;

const PersonDetaild = ({ itemId }) => {
  return (
  <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}>
      
    <Record field={"gender"} label={"Gender:"} item={undefined} />
    <Record field={"birthYear"} label={"Birth Year:"} item={undefined} />

  </ItemDetails>
  )
};

const PlanetDetaild = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field={"name"} label={"Name:"} item={undefined} />
      <Record field={"population"} label={"Population:"} item={undefined} />
      <Record field={"diameter"} label={"Diameter:"} item={undefined} />

    </ItemDetails>
  )
};

const StarshipDetaild = ({ itemId }) => {
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}>
      <Record field={"model"} label={"Model:"} item={undefined} />
      <Record field={"length"} label={"Length:"} item={undefined} />
      <Record field={"costInCredits"} label={"Cost:"} item={undefined} />
    </ItemDetails>
  )
};

export {
  PersonDetaild,
  PlanetDetaild,
  StarshipDetaild
}