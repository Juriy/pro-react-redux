import React from "react";
import {SwapiServiceConsumer} from "../swapi-servise-context";

const withSwapiServise = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps}/>
            )
          }
        }
      </SwapiServiceConsumer>
    );
  }
}

export default withSwapiServise;