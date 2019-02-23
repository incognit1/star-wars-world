export default class StarWarsService {
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

        return res.results.map(this._transformPerson).slice(0,6);
    };

    async getPerson(id) {
        const res = await this.getResource(`people/${id}/`);

        console.log('id', id);
        return this._transformPerson(res);
    }

    getAllPlanets = async () => {
        const res = await this.getResource('planets/');

        return res.results.map(this._transformPlanet);
    };

    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}/`);

        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource('starships/');

        return res.results;
    }

    getStarship(id) {
        return this.getResource(`starships/${id}/`)
    }


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

    _extractId(item) {
        const regexId = /\/([0-9]*)\/$/;

        return item.url.match(regexId)[1];
    }

}
