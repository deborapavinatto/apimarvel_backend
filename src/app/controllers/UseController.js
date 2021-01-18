// import { response } from 'express';
import axios from 'axios';
import { teste } from '../../services';

import api from '../services/api';

// const authentication ='?apikey=0bf5e1b311030e6e7501f90f91090116&hash=73197f0158552aed09861ffe51558e6f&ts=1610816113';
// import Services from '../../services';

// const services = new Services();

/* const offset = 0;
const apikey = '0bf5e1b311030e6e7501f90f91090116';
const hash = 'a2110823d4049282bfbe666bd8e79fff';
const ts = '1610816113'; */
// const offset = 0;

class UseController {
  async index(req, res) {
    const { data } = await api.get('/characters');
    try {
      return res.json(data.data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async show(req, res) {
    const { characterid } = req.params;
    const { data } = await api.get(`/characters/${characterid}`);

    try {
      return res.json(data.data.results);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  /* async offset(req, res) {
    try {
      const { page } = req.params;

      const { data } = await api.get(`/characters/pages/${page}`);

      data.data.offset = parseInt(page);

      return res.json(data.data);
    } catch (error) {
      console.log(error);
    }
  } */
  /* async index(req, res) {
    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&hash=${hash}&ts=${ts}&limit=100&offset=${offset}`;

    const promise = await axios.get(url);

    return res.json(promise.data.data.results);
  }

  show(req, res) {}
} */
  /* class UseController {
  index(req, res) {
    // return services.getUrl(response);
    return res.json({
      mensage: 'Test',
    });

    res.json(services.data);
  } */
}

export default new UseController();

// http://gateway.marvel.com/v1/public/characters/1011334
