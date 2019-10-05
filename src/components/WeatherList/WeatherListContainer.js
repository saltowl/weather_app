import { connect } from 'react-redux';
import { fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess } from '../../store/actions';
import axios from 'axios';
import WeatherList from './WeatherList';
import { getCities, getNextCityId } from '../../store/reducers';

export const fetchWeatherAction = (dispatch, id, cityName) => {
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
            if (error.response.status === 404) {
            }
        });
}


const mapStateToProps = (state) => ({
    cities: getCities(state),
    nextCityId: getNextCityId(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (id, name) => fetchWeatherAction(dispatch, id, name)
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);