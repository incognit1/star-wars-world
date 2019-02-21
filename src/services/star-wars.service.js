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

    async getAllPeople() {
        const res = await this.getResource('people/');

        return res.results;
    }

    getPerson(id) {
        return this.getResource(`people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource('planets/');

        return res.results.map(this._transformPlanet);
    }

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


    _transformPlanet(planet) {
        return {
            id            : this._extractId(planet),
            name          : planet.name,
            population    : planet.population,
            rotationPeriod: planet.rotation_period,
            diameter      : planet.diameter,
        }
    }

    _extractId(item) {
        const regexId = /\/([0-9]*)\/$/;

        console.log(item);

        return item.url.match(regexId)[1];
    }

}

const db = new StarWarsService();

db.getAllPeople().then(
    res => console.log(res),
    error => console.log(error),
);
