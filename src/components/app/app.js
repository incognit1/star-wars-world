import React, { Component } from 'react';
import Header from './../header';
import RandomPlanet from './../random-planet';
import ItemsList from './../item-list';
import PersonDetails from './../person-details';
import './app.css';

export default class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <RandomPlanet/>

                <div className="items-block">
                    <ItemsList/>
                    <PersonDetails/>
                </div>
            </div>
        );
    }
}
