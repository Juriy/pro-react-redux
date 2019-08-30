// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// ReactDOM.render(<App />, document.getElementById('root'));


// serviceWorker.unregister();

export default class swapiService {
   
    async getResource(url) {

        const urlBase = 'https://swapi.co/api/';

        const res = await fetch(url);

        if (!res.ok) {

            throw new Error(`No existe la persona por este url ${url}  ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`https://swapi.co/api/people`).then(body => {console.log(body)})
        return res.results;
    }

    async getAllStarships() {
        const res = await this.getResource(`https://swapi.co/api/starships/`).then(body => {console.log(body)})
        return res.results;
    }

    async getAllPlanets() {
        const res = await this.getResource(`https://swapi.co/api/planets/`).then(body => {console.log(body)})
        return res.results;
    }

    async getPerson(id) {
        const res = await this.getResource(`https://swapi.co/api/people/${id}`).then(body => {console.log(body)})
        return res;
    }

    async getPlanet(id) {
        const res = await this.getResource(`https://swapi.co/api/planets/${id}`).then(body => {console.log(body)})
        return res;
    }

    async getStarship(id) {
        const res = await this.getResource(`https://swapi.co/api/starships/${id}`).then(body => {console.log(body)})
        return res;
    }
}


const swapi = new swapiService();
swapi.getPerson('5');
swapi.getAllPeople();




