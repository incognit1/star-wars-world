import React from 'react';
import {Record} from "../item-details/item-details";
import withStarWarsService from "../hoc-helpers/with-star-wars-service";
import ItemDetails from "../item-details";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field={'gender'} label={'Gender'}/>
            <Record field={'eyeColor'} label={'Eye color'}/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (starWarsService) => {
    return {
        getData: starWarsService.getPerson,
        getImageUrl: starWarsService.getPersonImage,
    }
};

export default withStarWarsService(mapMethodsToProps)(PersonDetails);
