export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export const FETCH_CITIES_PENDING = 'FETCH_CITIES_PENDING';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR';

export const ADD_CITY_PENDING = 'ADD_CITY_PENDING';
export const ADD_CITY_SUCCESS = 'ADD_CITY_SUCCESS';
export const ADD_CITY_ERROR = 'ADD_CITY_ERROR';

export const DELETE_CITY_PENDING = 'DELETE_CITY_PENDING';
export const DELETE_CITY_SUCCESS = 'DELETE_CITY_SUCCESS';
export const DELETE_CITY_ERROR = 'DELETE_CITY_ERROR';

export const INITIAL_STATE = {
    weatherList: {
        cities: [],
        error: null,
        isFetching: false,
        newCity: null,
        cityToDelete: null
    },
    currentCity: {
        id: 0
    }  
}

export const DEFAULT_COORDS = {
    longitude: 30.32,
    latitude: 59.94
};

export const API = 'http://localhost:3000/';