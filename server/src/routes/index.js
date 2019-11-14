import express from 'express';
import favourites_controller from '../controllers/favouritesController';
import weather_controller from '../controllers/weatherController';

const router = express.Router();

router.get('/weather', weather_controller.get_weather_by_city_name);

router.get('/weather/coordinates', weather_controller.get_weather_by_coords);

router.get('/favourites', favourites_controller.get_favourites);

router.post('/favourites', favourites_controller.add_to_favourites);

router.delete('/favourites', favourites_controller.delete_from_favourites);

export default router;
