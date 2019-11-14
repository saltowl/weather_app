import * as constants from '../constants';

export const addCity = (name) => ({
    type: constants.ADD_CITY,
    name
});

export const deleteCity = (id) => ({
    type: constants.DELETE_CITY,
    id
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