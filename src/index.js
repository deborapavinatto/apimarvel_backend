import express from 'express';
import cors from 'cors';
import routes from './router';
// import Services, { teste } from './services';

const app = express();
// const services = new Services();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);
// services.getUrl();

// console.log(services.getUrl());

app.listen(3333);
