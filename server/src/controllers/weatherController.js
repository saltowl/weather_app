import axios from 'axios';

const getWeatherByCityName = (req, res, next) => {
    const cityName = req.query.city;

    if (typeof cityName !== 'string' || cityName.length < 1) {
        res.status(404).json({ success: false, message: 'City was not provided' });
    } else {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=96c2fc4713551153e7966978b449861a`)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                res.status(404).json({ success: false, message: 'City was not found', error });
            });
    }
};

const getWeatherByCoords = (req, res, next) => {
    const long = parseFloat(req.query.long);
    const lat = parseFloat(req.query.lat);

    if (!isNaN(long) && !isNaN(lat)) {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=96c2fc4713551153e7966978b449861a`)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                res.status(400).json({ success: false, message: `Cannot load weather with coords: [${lat}, ${long}]`, error });
            });
    } else {
        res.status(404).json({ success: false, message: 'Coords was not provided in the correct format' });
    }
};

export default {
    getWeatherByCityName,
    getWeatherByCoords
};