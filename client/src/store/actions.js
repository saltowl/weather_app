import * as constants from '../constants';

export const fetchCitiesPending = () => ({
    type: constants.FETCH_CITIES_PENDING
});

export const fetchCitiesSuccess = (cities) => ({
    type: constants.FETCH_CITIES_SUCCESS,
    cities
});

export const fetchCitiesError = (error) => ({
    type: constants.FETCH_CITIES_ERROR,
    error
});

export const addCityPending = (name) => ({
    type: constants.ADD_CITY_PENDING,
    name
});

export const addCitySuccess = (city) => ({
    type: constants.ADD_CITY_SUCCESS,
    city
});

export const addCityError = (error) => ({
    type: constants.ADD_CITY_ERROR,
    error
});

export const deleteCityPending = (id) => ({
    type: constants.DELETE_CITY_PENDING,
    id
});

export const deleteCitySuccess = (id) => ({
    type: constants.DELETE_CITY_SUCCESS,
    id
});

export const deleteCityError = (error) => ({
    type: constants.DELETE_CITY_ERROR,
    error
});

export const fetchWeatherPending = (id) => ({
    type: constants.FETCH_WEATHER_PENDING,
    id
});

export const fetchWeatherSuccess = (weather, id) => ({
    type: constants.FETCH_WEATHER_SUCCESS,
    id,
    weather
});

export const fetchWeatherError = (error, id) => ({
    type: constants.FETCH_WEATHER_ERROR,
    id,
    error
});