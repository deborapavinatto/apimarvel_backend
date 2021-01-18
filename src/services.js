// import { Router } from 'express';
import axios from 'axios';
// import { response } from 'express';
// import { response } from 'express';

export const teste = 'testeeeeeeeeee';

export default class Services {
  constructor() {
    this.offset = 0;
    this.apikey = '07f05d67192c439bf8203269fc153fdd';
    this.hash = 'a2110823d4049282bfbe666bd8e79fff';
    this.ts = '1609890812920';
    this.myArray = [];
    this.data = 'aaa';
  }

  async getUrl() {
    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}&limit=100&offset=${this.offset}`;

    const promise = await axios
      .get(url)
      .then(response => {
        // const ab = response.json(response.data.data.results);
        // this.data = response.data.data.results;
        // console.log(response);
        // console.log(this.data);
        // console.log(this.data);
        console.log('testee');
        // console.log(response);
        // responsea.json(responsea.data);
        this.data = response.data.data.results;
      })
      .catch(error => console.log(error));

    return promise;
  }
}
