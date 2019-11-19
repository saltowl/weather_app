import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import index_router from './routes/index';

const app = express();

const mongoDB = 'mongodb+srv://saltowl:eadghe@weather-3uans.mongodb.net/weather_db?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB error', err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index_router);

export default app;