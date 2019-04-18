import React, {Component} from 'react';
import Header from './../header';
import './app.css';
import StarWarsService from "../../services/star-wars.service";
import Row from "../row";
import {PersonList, PlanetList, StarshipList} from "../sw-components/item-list";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components/details";

export default class App extends Component {

    state = {
        selectedItemId: 1,
    };

    db = new StarWarsService();

    render() {
        return (

            <div className="wrapper">
                <Header/>

                <PersonList/>
                <StarshipList/>
                <PlanetList/>

                <Row
                    left={<PersonDetails itemId={1}/>}
                    right={<StarshipDetails itemId={5}/>}/>
                <br/>

                <PlanetDetails itemId={5}/>

            </div>
        );
    }
}

/*
const x = (
    <div>

        <RandomPlanet/>
        <PeoplePage/>

        <div className="row mb2">
            <div className="col-md-6">
                <ItemList getData={this.db.getAllStarships}
                          renderItem={(item) => item.name}
                          onItemSelected={this.onPersonSelected}>
                    {(item) => (<p>{item.name} <span className="add-info">{item.gender}</span></p>)}
                </ItemList>
            </div>
            <div className="col-md-6">
                <ItemDetails itemId={this.state.selectedItemId}/>
            </div>
        </div>

        <br/>

        <div className="row mb2">
            <div className="col-md-6">
                <ItemList getData={this.db.getAllPlanets}
                          renderItem={(item) => item.name}
                          onItemSelected={this.onPersonSelected}>
                    {(item) => (<p>{item.name} <span className="add-info">{item.gender}</span></p>)}
                </ItemList>
            </div>
            <div className="col-md-6">
                <ItemDetails personId={this.state.selectedItemId}/>
            </div>
        </div>
    </div>
);
*/
