import axios from 'axios';

// const authentication = '?apikey=0bf5e1b311030e6e7501f90f91090116&hash=73197f0158552aed09861ffe51558e6f&ts=1610816113';
const limit = 100;
// const offset = 0;

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?apikey=0bf5e1b311030e6e7501f90f91090116&hash=73197f0158552aed09861ffe51558e6f&ts=1610816113&limit=${limit}`,
});

export default api;
// &offset=${offset}
// https://gateway.marvel.com/v1/public/characters
// https://gateway.marvel.com/v1/public/characters?apikey=07f05d67192c439bf8203269fc153fdd&hash=a2110823d4049282bfbe666bd8e79fff&ts=1609890812920&limit=100&&offset=0
