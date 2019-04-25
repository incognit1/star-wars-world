import React, {Component} from 'react';
import Header from './../header';
import './app.css';
import StarWarsService from "../../services/star-wars.service";

import {StarWarsProvider} from './../star-wars-context';

import StarshipsPage from "../pages/starships-page";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import RandomPlanet from "../random-planet";
import PersonDetails from "../sw-components/person-details";


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class App extends Component {
    dataService = new StarWarsService();

    render() {
        return (
            <div className="wrapper">
                <StarWarsProvider value={this.dataService}>
                    <Router>
                        <Header/>
                        <RandomPlanet/>

                        <Switch>
                            <Route path='/'
                                   exact
                                   render={() => <h2>Welcome to StarWars!</h2>}/>
                            <Route path='/people'
                                   exact
                                   component={PeoplePage}/>
                            <Route path='/people/:id'
                                   render={({match}) => {
                                       const {id} = match.params;
                                       return <PersonDetails itemId={id}/>
                                   }}/>
                            <Route path='/planets' component={PlanetsPage}/>
                            <Route path='/starships' component={StarshipsPage}/>

                            <Route render={()=> (<h2 className='color-white'>Not Found</h2>)}/>
                        </Switch>
                    </Router>
                </StarWarsProvider>
            </div>
        );
    }
}
