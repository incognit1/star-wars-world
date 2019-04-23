import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import React from "react";
import withStarWarsService from "../hoc-helpers/with-star-wars-service";
import {compose} from "../hoc-helpers/compose";

const withChildFunction = (fn) => Wrapped => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>
    }
};

const renderName         = ({name}) => (<span>{name}</span>),
      renderModelAndName = ({name, model}) => (<span>{name} ({model})</span>);

const mapPersonListDataToProps  = (starWarsService) => ({
    getData: starWarsService.getAllPeople
});
const mapPlanetListDataToProps  = (starWarsService) => ({
    getData: starWarsService.getAllPlanets
});
const mapStarshipListDataToProps = (starWarsService) => ({
    getData: starWarsService.getAllStarships
});

const PersonList = compose(
    withStarWarsService(mapPersonListDataToProps),
    withData,
    withChildFunction(renderName),
)(ItemList);

const StarshipList = compose(
    withStarWarsService(mapStarshipListDataToProps),
    withData,
    withChildFunction(renderModelAndName),
)(ItemList);

const PlanetList = compose(
    withStarWarsService(mapPlanetListDataToProps),
    withData,
    withChildFunction(renderName),
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList,
}
