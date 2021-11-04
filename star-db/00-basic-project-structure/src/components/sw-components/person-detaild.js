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

export default PersonDetaild