import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-servise-context";

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

export default StarshipDetaild