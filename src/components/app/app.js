import React, { Component } from 'react';
import Header from './../header';
import RandomPlanet from './../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import PersonDetails from "../person-details";
import StarWarsService from "../../services/star-wars.service";
import ItemList from "../item-list";

export default class App extends Component {

    db = new StarWarsService();

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <RandomPlanet/>

                <PeoplePage/>

                <br/>
                <div className="items-block">
                    <ItemList getData={this.db.getAllPlanets}
                              onPersonSelected={this.onPersonSelected}>
                        {(item) => item.name}
                    </ItemList>
                </div>
            </div>
        );
    }
}
