import React from 'react';

import {Record} from "../item-details/item-details";
import withStarWarsService from "../hoc-helpers/with-star-wars-service";
import ItemDetails from "../item-details";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field={'name'} label={'Name'}/>
            <Record field={'population'} label={'Population'}/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (starWarsService) => {
    return {
        getData: starWarsService.getPlanet,
        getImageUrl: starWarsService.getPlanetImage,
    }
};

export default withStarWarsService(PlanetDetails, mapMethodsToProps);
