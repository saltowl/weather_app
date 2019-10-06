export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export const INITIAL_STATE = {
    'weatherList': {
        'cities': [],
        'nextCityId': 1,
    },
    'currentCity': {
        'id': 0
    }  
}

export const DEFAULT_COORDS = {
    'longitude': 30.32,
    'latitude': 59.94
};