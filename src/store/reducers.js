import * as constants from '../constants';

const weatherReducer = (state = constants.INITIAL_STATE, action = {}) => {
    let changedCities = [];
    switch (action.type) {
        case constants.FETCH_WEATHER_PENDING:
            changedCities = getCities(state).map(city => 
                    city.id === action.id ? {...city, pending: true} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.FETCH_WEATHER_SUCCESS:
            changedCities = getCities(state).map(city => 
                    city.id === action.id ? {...city, pending: false, weather: action.weather} : city
                );
            return {
                ...state,
                cities: changedCities
            };

        case constants.FETCH_WEATHER_ERROR:
            changedCities = getCities(state).map(city => 
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
                        id: getNextCityId(state),
                        name: action.name
                    }
                ] 
                return {
                    ...state,
                    nextCityId: getNextCityId(state) + 1,
                    cities: changedCities
                };
    
            case constants.DELETE_CITY:
                changedCities = getCities(state).filter(city => city.id !== action.id);
                return {
                    ...state,
                    cities: changedCities
                };

        default:
            return state;
    }
};

export const getCities = state => state.cities;
export const getNextCityId = state => state.nextCityId;

export default weatherReducer;