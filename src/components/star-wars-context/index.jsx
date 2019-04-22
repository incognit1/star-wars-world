import React from "react";

const { Provider: StarWarsProvider, Consumer: StarWarsConsumer } = React.createContext();

export {
    StarWarsConsumer,
    StarWarsProvider,
}
