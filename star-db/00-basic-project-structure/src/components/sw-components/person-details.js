import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import { withSwapiServise } from "../hoc-helpers";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
        
      <Record field={"gender"} label={"Gender:"} item={undefined} />
      <Record field={"birthYear"} label={"Birth Year:"} item={undefined} />

    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiServise(PersonDetails, mapMethodsToProps)