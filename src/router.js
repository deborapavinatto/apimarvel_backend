import { Router } from 'express';
import UseController from './app/controllers/UseController';

const routes = new Router();

routes.get('/characters', UseController.index);

routes.get('/characters/:characterid', UseController.show);

export default routes;
