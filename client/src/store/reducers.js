import * as constants from "../constants";
import { combineReducers } from "redux";

const weatherListReducer = (
  state = constants.INITIAL_STATE.weatherList,
  action = {}
) => {
  let changedCities = [];

  if (action.id === 0) {
    return state;
  }

  switch (action.type) {
    case constants.FETCH_WEATHER_PENDING:
      changedCities = state.cities.map(city =>
        city.id === action.id ? { ...city, pending: true } : city
      );
      return {
        ...state,
        cities: changedCities
      };

    case constants.FETCH_WEATHER_SUCCESS:
      changedCities = state.cities.map(city =>
        city.id === action.id
          ? { ...city, pending: false, weather: action.weather }
          : city
      );
      return {
        ...state,
        cities: changedCities
      };

    case constants.FETCH_WEATHER_ERROR:
      changedCities = state.cities.map(city =>
        city.id === action.id
          ? { ...city, pending: false, error: action.error }
          : city
      );
      return {
        ...state,
        cities: changedCities
      };

    case constants.FETCH_CITIES_PENDING:
      return {
          ...state,
          isFetching: true,
      };

    case constants.FETCH_CITIES_SUCCESS:
      return {
          ...state,
          cities: action.cities,
          isFetching: false
      };

    case constants.FETCH_CITIES_ERROR:
      return {
          ...state,
          isFetching: false,
          error: action.error
      };
    
    case constants.ADD_CITY_PENDING:
      return {
        ...state,
        newCity: action.name
      };

    case constants.ADD_CITY_SUCCESS:
      changedCities = [...state.cities, action.city];
      return {
        ...state,
        error: null,
        cities: changedCities,
        newCity: null
      };

    case constants.ADD_CITY_ERROR:
      return {
        ...state,
        error: action.error,
        newCity: null
      };

    case constants.DELETE_CITY_PENDING:
      return {
        ...state,
        cityToDelete: action.id
      };

    case constants.DELETE_CITY_SUCCESS:
      changedCities = state.cities.filter(city => city.id !== action.id);
      return {
        ...state,
        cities: changedCities,
        error: null,
        cityToDelete: null
      };

    case constants.DELETE_CITY_ERROR:
      return {
        ...state,
        error: action.error,
        cityToDelete: null
      };

    default:
      return state;
  }
};

const currentCityReducer = (
  state = constants.INITIAL_STATE.currentCity,
  action = {}
) => {
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
export const getCurrentCity = state => state.currentCity;

export default combineReducers({
  weatherList: weatherListReducer,
  currentCity: currentCityReducer
});
