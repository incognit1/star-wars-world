import React, {Component} from 'react';
import './person-details.css';
import StarWarsService from "../../services/star-wars.service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

    state = {
        person: {},
        error: false,
        loading: true,
    };

    db = new StarWarsService();

    updatePerson() {
        const {personId} = this.props;

        if (!personId) {
            return;
        }

        this.setState({loading: true});

        this.db.getPerson(personId)
            .then(this.onPersonLoaded)
            .catch(this.onLoadError)
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        console.log(person);
        this.setState({
            person,
            loading: false,
        });
    };

    onLoadError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    componentDidMount() {
        this.updatePerson();
    }

    render() {
        const personView = !this.state.loading ? PersonDetailsView(this.state.person) : null;
        const loaderView = this.state.loading ? <Spinner/> : null;

        return (
            <div className="person-details">
                {personView}
                <div className="loader">
                    {loaderView}
                </div>
            </div>
        )
    }
}

const PersonDetailsView = ({name, gender, birthYear, eyeColor, id}) => {
    return (<React.Fragment>
        <div className="img">
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt=""/>
        </div>

        <div className="info">
            <h4>{name}</h4>
            <p>Пол: {gender}</p>
            <p>День рождения: {birthYear}</p>
            <p>Цвет глаз: {eyeColor}</p>
        </div>
    </React.Fragment>)
};
