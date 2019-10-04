import * as constants from '../constants';
import {combineReducers} from redux;

const weatherReducer = (state = constants.INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case constants.FETCH_WEATHER_PENDING:
            const key = action.cityName;
            const changedCities = state.cities.map(city => 
                    city.id === action.id ? {...city, pending: true} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.FETCH_WEATHER_SUCCESS:
            const key = action.cityName;
            const changedCities = state.cities.map(city => 
                    city.id === action.id ? {...city, pending: false, weather: action.weather} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.FETCH_WEATHER_ERROR:
            const key = action.cityName;
            const changedCities = state.cities.map(city => 
                    city.id === action.id ? {...city, pending: false, error: action.error} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        default:
            return state;
    }
};

const citiesReducer = (state = constants.INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case constants.ADD_CITY:
            return {
                ...state,
                nextCityId: state.nextCityId++,
                cities: [
                    ...state.cities,
                    {
                        id: state.nextCityId,
                        name: action.name
                    }
                ]
            };

        case constants.DELETE_CITY:
            const filteredCities = state.cities.filter(city => city.id !== action.id);
            return {
                ...state,
                cities: filteredCities
            };

        default:
            return state;
    }
};

export default combineReducers({
    citiesReducer,
    weatherReducer
});
