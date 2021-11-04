import React from "react";
import {SwapiServiceConsumer} from "../swapi-servise-context";

const withSwapiServise = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (
              <Wrapped {...props} swapiService={swapiService}/>
            )
          }
        }
      </SwapiServiceConsumer>
    );
  }
}

export default withSwapiServise;