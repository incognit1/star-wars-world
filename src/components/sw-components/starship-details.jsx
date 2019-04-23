import React from 'react';

import {Record} from "../item-details/item-details";
import withStarWarsService from "../hoc-helpers/with-star-wars-service";
import ItemDetails from "../item-details";

const StarshipDetails = (props) => {

    return (<ItemDetails {...props}>
            <Record field={'passengers'} label={'Passengers'}/>
            <Record field={'length'} label={'Length'}/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (starWarsService) => {
    return {
        getData: starWarsService.getStarship,
        getImageUrl: starWarsService.getStarshipImage,
    }
};

export default withStarWarsService(mapMethodsToProps)(StarshipDetails);
