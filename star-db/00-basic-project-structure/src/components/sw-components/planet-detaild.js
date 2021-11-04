import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-servise-context";

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

export default PlanetDetaild