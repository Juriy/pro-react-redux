// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';

// ReactDOM.render(<App />,
//   document.getElementById('root'));

// Как получить данные с сервера в консоль ?
// const URL = 'http://swapi.dev/api/people/1/';
// 1. способ 

// fetch(URL)
//   .then((res) => res.json())
//   .then((body) => console.log(body));

// 2. способ
// const getResorce = async (url) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error ('ошибочка у нас тут')
//   }

//   const body = await res.json();
//   return body;
// };

// getResorce(URL).then((body) => console.log(body));

// Как изолировать сетевой код в класс?
class SwapiServive {
  _apiBase = 'https://swapi.dev/api'

  async getResorce (url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error ('ошибочка у нас тут')
    }

    const body = await res.json();
    return body;    
  }

  async getAllPeople () {
    const res = await this.getResorce(`/people/`);
    return res.results;
  }

  getPerson (id) {
    return this.getResorce(`/people/${id}/`)
  }

  async getAllPlanets () {
    const res = await this.getResorce(`/planets/`);
    return res.results;
  }

  getPlanet (id) {
    return this.getResorce(`/planet/${id}/`)
  }

  async getAllStarships () {
    const res = await this.getResorce(`/starships/`);
    return res.results;
  }

  getPlanet (id) {
    return this.getResorce(`/starships/${id}/`)
  }
}

const swapi = new SwapiServive();

swapi.getPlanet(3).then((getPlanet) => {
    console.log(getPlanet)
})