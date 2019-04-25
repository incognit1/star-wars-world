import React, {Component} from 'react';

import Row from "../row";
import {StarshipList} from "../sw-components/item-list";
import StarshipDetails from "../sw-components/starship-details";

class StarshipsPage extends Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        return (
            <React.Fragment>
                <h3 className='color-white'>Planets</h3>
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                 right={<StarshipDetails itemId={this.state.selectedItem}/>}/>
            </React.Fragment>
        );
    }
}

export default StarshipsPage;
