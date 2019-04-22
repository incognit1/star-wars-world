import React, {Component} from 'react';
import Header from './../header';
import './app.css';
import StarWarsService from "../../services/star-wars.service";
import {PersonList, PlanetList, StarshipList} from "../sw-components/item-list";

import {StarWarsProvider} from './../star-wars-context';

import PlanetDetails from './../sw-components/planet-details';
import StarshipDetails from './../sw-components/starship-details';
import PersonDetails from './../sw-components/person-details';

export default class App extends Component {

    state = {
        selectedItemId: 1,
    };

    dataService = new StarWarsService();

    render() {
        return (

            <div className="wrapper">
                <Header/>

                <StarWarsProvider value={this.dataService}>
                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/>

                    <PlanetDetails itemId={5}/>
                    <PersonDetails itemId={1}/>
                    <StarshipDetails itemId={5}/>
                </StarWarsProvider>


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
