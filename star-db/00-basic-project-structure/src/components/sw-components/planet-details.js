import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import withSwapiServise from "../hoc-helpers/with-swapi-servise";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field={"name"} label={"Name:"} item={undefined} />
      <Record field={"population"} label={"Population:"} item={undefined} />
      <Record field={"diameter"} label={"Diameter:"} item={undefined} />

    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiServise(mapMethodsToProps)(PlanetDetails)