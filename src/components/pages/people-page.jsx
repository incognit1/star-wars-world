import React from 'react';
import {PersonList} from "../sw-components/item-list";

const PeoplePage = (props) => {

    return (
        <React.Fragment>
            <h3>People</h3>
            <PersonList onItemSelected={(id) => {
                const newLocation=`${id}`;

                props.history.push(newLocation)
            }}/>
        </React.Fragment>
    );
}

export default PeoplePage;
