import { connect } from 'react-redux';
import { fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess, deleteCity } from '../../store/actions';
import axios from 'axios';
import WeatherList from './WeatherList';
import { getCities, getNextCityId } from '../../store/reducers';

export const fetchWeatherByNameAction = (id, cityName) => {
    return dispatch => {
        dispatch(fetchWeatherPending(id));
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=96c2fc4713551153e7966978b449861a`)
            .then(response => {
                dispatch(fetchWeatherSuccess(response.data, id));
                console.log(response.data);
            })
            .catch(error => {
                dispatch(fetchWeatherError(error, id));
                console.log(error);
            });
    }
}


const mapStateToProps = (state) => ({
    cities: getCities(state),
    nextCityId: getNextCityId(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeatherByName: (id, name) => dispatch(fetchWeatherByNameAction(id, name)),
    deleteCity: id => dispatch(deleteCity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);