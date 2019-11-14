import * as constants from '../constants';
import { combineReducers } from 'redux';

const weatherReducer = (state = constants.INITIAL_STATE.weatherList, action = {}) => {
    let changedCities = [];

    if (action.id === 0) {
        return state;
    }

    switch (action.type) {
        case constants.FETCH_WEATHER_PENDING:
            changedCities = state.cities.map(city => 
                    city.id === action.id ? {...city, pending: true} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.FETCH_WEATHER_SUCCESS:
            changedCities = state.cities.map(city => 
                    city.id === action.id ? {...city, pending: false, weather: action.weather} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.FETCH_WEATHER_ERROR:
            changedCities = state.cities.map(city => 
                    city.id === action.id ? {...city, pending: false, error: action.error} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.ADD_CITY:
                changedCities = [
                    ...state.cities,
                    {
                        id: state.nextCityId,
                        name: action.name
                    }
                ] 
                return {
                    ...state,
                    nextCityId: state.nextCityId + 1,
                    cities: changedCities
                };
    
            case constants.DELETE_CITY:
                changedCities = state.cities.filter(city => city.id !== action.id);
                return {
                    ...state,
                    cities: changedCities
                };

        default:
            return state;
    }
};

const currentCityReducer = (state = constants.INITIAL_STATE.currentCity, action = {}) => {
    if (action.id !== 0) {
        return state;
    }
    
    switch (action.type) {
        case constants.FETCH_WEATHER_PENDING:
            return {
                ...state,
                pending: true
            };

        case constants.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                pending: false,
                weather: action.weather
            };

        case constants.FETCH_WEATHER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };

        default:
            return state;
    }
};

export const getCities = state => state.weatherList.cities;
export const getNextCityId = state => state.weatherList.nextCityId;
export const getCurrentCity = state => state.currentCity;

export default combineReducers({
    weatherList: weatherReducer,
    currentCity: currentCityReducer
});