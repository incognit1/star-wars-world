import React, {Component} from 'react';
import Header from './../header';
import RandomPlanet from './../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import ItemDetails from "../item-details";
import StarWarsService from "../../services/star-wars.service";
import ItemList from "../item-list";
import Row from "../row";
import {Record} from "../item-details/item-details";

export default class App extends Component {

    state = {
        selectedItemId: 1,
    };

    db = new StarWarsService();

    render() {
        const personDetails   = (
                  <ItemDetails getData={this.db.getPerson} getImageUrl={this.db.getPersonImage} itemId={11}>
                      <Record field={'gender'} label={'Gender'}/>
                      <Record field={'eyeColor'} label={'Eye color'}/>
                  </ItemDetails>
              ),
              starshipDetails = (
                  <ItemDetails getData={this.db.getStarship} getImageUrl={this.db.getStarshipImage} itemId={5}>
                      <Record field={'passengers'} label={'Passengers'}/>
                      <Record field={'length'} label={'Length'}/>
                  </ItemDetails>);

        return (

            <div className="wrapper">
                <Header/>

                <Row
                    left={personDetails}
                    right={starshipDetails}/>
                <br/>

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
