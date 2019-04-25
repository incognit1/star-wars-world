import React, {Component} from 'react';

import Row from "../row";
import {PlanetList} from "../sw-components/item-list";
import PlanetDetails from "../sw-components/planet-details";


class PlanetsPage extends Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
        console.log('selected id', selectedItem);
        this.setState({selectedItem});
    };

    render() {
        return (
            <React.Fragment>
                <h3 className='color-white'>Planets</h3>
                <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                 right={<PlanetDetails itemId={this.state.selectedItem}/>}/>
            </React.Fragment>
        );
    }}

export default PlanetsPage;
