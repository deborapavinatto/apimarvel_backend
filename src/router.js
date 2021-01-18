import { Router } from 'express';
import UseController from './app/controllers/UseController';
// import Services from './services';

const routes = new Router();
// const services = new Services();

/*
routes.get('/', (req, res) => {
  res.json(services.getUrl());
}); */

/*  async function teste() {
  await services.getUrl();

} */

routes.get('/characters', UseController.index);

routes.get('/characters/:characterid', UseController.show);

// routes.get('/characters/pages/:page', UseController.offset);
// teste();

export default routes;
