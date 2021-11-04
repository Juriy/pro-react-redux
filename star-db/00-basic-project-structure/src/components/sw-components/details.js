import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-servise-context";

const PersonDetaild = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}>
                
              <Record field={"gender"} label={"Gender:"} item={undefined} />
              <Record field={"birthYear"} label={"Birth Year:"} item={undefined} />

            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

const PlanetDetaild = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImage}) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

const StarshipDetaild = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetaild,
  PlanetDetaild,
  StarshipDetaild
}