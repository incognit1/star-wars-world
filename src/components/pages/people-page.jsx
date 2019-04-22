import React, {Component} from 'react';

import Row from "../row";
import {PersonList} from "../sw-components/item-list";
import PersonDetails from "../sw-components/person-details";

class PeoplePage extends Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        return (
            <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                 right={<PersonDetails itemId={this.state.selectedItem}/>}/>
        );
    }}

export default PeoplePage;
