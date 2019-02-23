import React, {Component} from 'react';
import './people-page.css'
import PersonDetails from "../person-details";
import ItemList from "../item-list";
import StarWarsService from "../../services/star-wars.service";
import ErrorCatcher from "../error-catcher";

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

        return (
            <ErrorCatcher>
                <div className="items-block">
                    <ItemList getData={this.db.getAllPeople}
                              onPersonSelected={this.onPersonSelected}>
                        {(item) => (<p>{item.name} <span className="add-info">{item.gender}</span> </p>)}
                    </ItemList>
                    <PersonDetails personId={selectedItemId}/>
                </div>
            </ErrorCatcher>
        )
    }
}
