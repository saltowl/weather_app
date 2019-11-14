import express from 'express';
import path from 'path';
import logger from 'morgan';
import index_router from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index_router);

export default app;