import React, {Component} from 'react';
import './people-page.css'
import ItemList from "../item-list";
import StarWarsService from "../../services/star-wars.service";
import Row from "../row";
import ErrorCatcher from "../error-catcher";
import ItemDetails from "../item-details";

export default class PeoplePage extends Component {
    state = {
        selectedItemId: 1,
    };

    db = new StarWarsService();

    onPersonSelected = (id) => {
        this.setState({selectedItemId: id});
    };

    render() {
        const {selectedItemId} = this.state;

        const itemList = (
            <ItemList getData={this.db.getAllPeople}
                      onItemSelected={this.onPersonSelected}>
                {
                    (item) => `${item.name} Родился: ${item.birthYear}`
                }
            </ItemList>
        );

        const personDetails = (
            <ItemDetails personId={selectedItemId}/>
        );

        return (
            <div>
                <ErrorCatcher>
                    <Row left={itemList} right={personDetails}/>
                </ErrorCatcher>>
            </div>
        )
    }
}
