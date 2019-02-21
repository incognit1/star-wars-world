import React, {Component} from 'react';
import './random-planet.css';
import StarWarsService from "../../services/star-wars.service";

export default class RandomPlanet extends Component {

    state = {
        planet: {},
    };

    db = new StarWarsService();

    constructor() {
        super();
        this.updatePlanet(7);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25);

        this.db.getPlanet(id).then(
            res => {
                this.onPlanetLoaded(res);

                console.log(res);
            },
        )
    }

    render() {
        const {name, population, rotationPeriod, diameter, id} = this.state.planet;

        return (
            <div className="random-planet">
                <div className="image-preview">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt=""/>
                </div>
                <div className="details">
                    <h3>{name}</h3>
                    <p>Население: {population}</p>
                    <p>Полный оборот: {rotationPeriod}</p>
                    <p>Диаметр: {diameter}</p>
                </div>
            </div>
        )
    }
}
