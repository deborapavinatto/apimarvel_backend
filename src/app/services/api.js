import axios from 'axios';

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?apikey=0bf5e1b311030e6e7501f90f91090116&hash=73197f0158552aed09861ffe51558e6f&ts=1610816113&limit=100`,
});

export default api;
