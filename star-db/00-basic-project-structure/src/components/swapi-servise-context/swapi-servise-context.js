import React from "react";

const { 
  Provider: SwapiServiceProvider, 
  Consumer: SwapiServiceConsumer 
// @ts-ignore
} = React.createContext();

export {
  SwapiServiceProvider,
  SwapiServiceConsumer
}
