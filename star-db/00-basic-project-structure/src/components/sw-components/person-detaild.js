import React from "react";

import ItemDetails, {Record} from "../Item-details/item-details";
import { withSwapiServise } from "../hoc-helpers";

const PersonDetaild = ({ itemId, swapiService }) => {
  const {getPerson, getPersonImage} = swapiService;

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

export default withSwapiServise(PersonDetaild)