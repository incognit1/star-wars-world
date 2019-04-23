import React from 'react'
import {StarWarsConsumer} from "../star-wars-context";

const withStarWarsService = (mapMethodsToProps) => (View) => {
    return (props) => {
        return (
            <StarWarsConsumer>
                {(starWarsService) => {
                    const serviceProps = mapMethodsToProps(starWarsService);

                    return <View {...props} {...serviceProps}/>
                }}
            </StarWarsConsumer>
        )
    }
};

export default withStarWarsService;
