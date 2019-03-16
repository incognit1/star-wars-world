export default class StarWarsService {
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource(url) {
        const _apiBase = 'https://swapi.co/api/';

        const res = await fetch(_apiBase + url);

        if (!res.ok) {
            throw new Error('Не найдено');
        }

        const body = await res.json();

        return await body;
    }

    getAllPeople = async () => {
        const res = await this.getResource('people/');

        return res.results.map(this._transformPerson).slice(0, 6);
    };

    getPerson = async (id) => {
        const res = await this.getResource(`people/${id}/`);

        console.log('id', id);
        return this._transformPerson(res);
    };

    getAllPlanets = async () => {
        const res = await this.getResource('planets/');

        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);

        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource('starships/');

        return res.results;
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`starships/${id}/`);

        return this._transformStarship(starship);
    };

    getPersonImage = (person) => {
        return `${this._imageBase}/characters/${person.id}.jpg`
    };

    getStarshipImage = (starship) => {
        return `${this._imageBase}/starships/${starship.id}.jpg`
    };

    getPlanetsImage = (planet) => {
        return `${this._imageBase}/planets/${planet.id}.jpg`
    };

    _transformPlanet = (planet) => {
        return {
            id            : this._extractId(planet),
            name          : planet.name,
            population    : planet.population,
            rotationPeriod: planet.rotation_period,
            diameter      : planet.diameter,
        }
    };

    _transformPerson = (person) => {
        return {
            id       : this._extractId(person),
            name     : person.name,
            gender   : person.gender,
            birthYear: person.birth_year,
            eyeColor : person.eye_color,
        }
    };

    _transformStarship = (starship) => {
        return {
            id        : this._extractId(starship),
            name      : starship.name,
            passengers: starship.passengers,
            length    : starship.length,
        }
    };

    _extractId(item) {
        const regexId = /\/([0-9]*)\/$/;

        return item.url.match(regexId)[1];
    }

}
