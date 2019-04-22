import React, {Component} from 'react';
import Header from './../header';
import './app.css';
import StarWarsService from "../../services/star-wars.service";

import {StarWarsProvider} from './../star-wars-context';

import StarshipsPage from "../pages/starships-page";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import RandomPlanet from "../random-planet";

export default class App extends Component {
    dataService = new StarWarsService();

    render() {
        return (

            <div className="wrapper">
                <Header/>
                <RandomPlanet/>

                <StarWarsProvider value={this.dataService}>
                    <StarshipsPage/>
                    <PeoplePage/>
                    <PlanetsPage/>
                </StarWarsProvider>
            </div>
        );
    }
}
