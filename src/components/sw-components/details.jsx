import React from "react";

import withData from "../hoc-helpers/with-data";
import ItemDetails from "../item-details";
import StarWarsService from "../../services/star-wars.service";
import {Record} from "../item-details/item-details";

const { getPerson, getStarship, getPlanet, getPersonImage, getStarshipImage, getPlanetsImage } = new StarWarsService();

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails getData={getPerson}
                     getImageUrl={getPersonImage}
                     itemId={itemId}>
            <Record field={'gender'} label={'Gender'}/>
            <Record field={'eyeColor'} label={'Eye color'}/>
        </ItemDetails>
    )
};

const StarshipDetails = ({itemId}) => (
    <ItemDetails getData={getStarship}
                 getImageUrl={getStarshipImage}
                 itemId={itemId}>
        <Record field={'passengers'} label={'Passengers'}/>
        <Record field={'length'} label={'Length'}/>
    </ItemDetails>
);

const PlanetDetails = ({itemId}) => (
    <ItemDetails getData={getPlanet}
                 getImageUrl={getPlanetsImage}
                 itemId={itemId}>
        <Record field={'name'} label={'Name'}/>
        <Record field={'population'} label={'Population'}/>
    </ItemDetails>
);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}
