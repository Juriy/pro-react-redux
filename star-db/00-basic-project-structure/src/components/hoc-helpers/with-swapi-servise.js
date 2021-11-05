import React from "react";
import {SwapiServiceConsumer} from "../swapi-servise-context";

const withSwapiServise = (Wrapped, mapMethodsToProps) => {
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