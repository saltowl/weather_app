import express from 'express';
import favouritesController from '../controllers/favouritesController';
import weatherController from '../controllers/weatherController';

const router = express.Router();

router.get('/weather', weatherController.getWeatherByCityName);

router.get('/weather/coordinates', weatherController.getWeatherByCoords);

router.route('/favourites')
    .get(favouritesController.fetchFavourites)
    .post(favouritesController.addToFavourites);

router.delete('/favourites/:id', favouritesController.deleteFromFavourites);

export default router;
