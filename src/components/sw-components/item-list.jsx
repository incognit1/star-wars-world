import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import StarWarsService from "../../services/star-wars.service";

const { getAllPeople, getAllStarships, getAllPlanets } = new StarWarsService();

const PersonList = withData(ItemList, getAllPeople);

const StarshipList = withData(ItemList, getAllStarships);

const PlanetList = withData(ItemList, getAllPlanets);

export {
    PersonList,
    PlanetList,
    StarshipList,
}
