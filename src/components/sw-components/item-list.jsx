import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import React from "react";
import withStarWarsService from "../hoc-helpers/with-star-wars-service";

const withChildFunction = (Wrapped, fn) => {
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

const PersonList =
          withStarWarsService(
              withData(
                  withChildFunction(ItemList, renderName),
              ),
              mapPersonListDataToProps,
          );

const StarshipList =
          withStarWarsService(
              withData(
                  withChildFunction(ItemList, renderModelAndName),
              ),
              mapStarshipListDataToProps,
          );

const PlanetList =
          withStarWarsService(
              withData(
                  withChildFunction(ItemList, renderName)
              ),
              mapPlanetListDataToProps,
          );

export {
    PersonList,
    PlanetList,
    StarshipList,
}
