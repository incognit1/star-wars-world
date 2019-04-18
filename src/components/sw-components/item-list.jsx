import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import StarWarsService from "../../services/star-wars.service";
import React from "react";

const { getAllPeople, getAllStarships, getAllPlanets } = new StarWarsService();

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>
    }
};


const renderName = ({name}) => (<span>{name}</span>),
      renderModelAndName = ({name, model}) => (<span>{name} ({model})</span>);

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople
);

const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships,
);

const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets
);

export {
    PersonList,
    PlanetList,
    StarshipList,
}
