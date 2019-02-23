import React, {Component} from 'react';
import './random-planet.css';
import StarWarsService from "../../services/star-wars.service";
import Spinner from "../spinner";
import ErrorMessage from "../error-message";

export default class RandomPlanet extends Component {

    state = {
        planet : {},
        loading: true,
        error  : false,
    };

    db = new StarWarsService();

    componentDidMount() {
        this.updatePlanet();

        setInterval(
            this.updatePlanet,
            10000
        )
    }

    onPlanetLoaded = (planet) => {
        this.setState({loading: false, error: false});

        this.setState({planet})
    };

    onError = () => {
        this.setState({error: true, loading: false});
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25);

        this.setState({loading: true, error: false});

        this.db.getPlanet(id).then(
            res => this.onPlanetLoaded(res),
            () => this.onError()
        )
    };

    render() {
        const {planet, loading, error} = this.state;

        const randomPlanetView = !error && !loading ? RandomPlanetView(planet) : null;
        const loader           = loading ? <div className="spinner"><Spinner/></div> : null;

        const errorMessage = error ? <ErrorMessage/> : null;

        return (
            <div className="random-planet">
                {randomPlanetView}
                {loader}
                {errorMessage}
            </div>
        )
    }
}

const RandomPlanetView = (planet) => {
    const {name, population, rotationPeriod, diameter, id} = planet;

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};
