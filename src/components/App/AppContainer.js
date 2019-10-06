import { connect } from 'react-redux';
import { fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess } from '../../store/actions';
import axios from 'axios';
import { getCurrentCity } from '../../store/reducers';
import App from './App';
import { DEFAULT_COORDS } from '../../constants';

const fetchWeather = (dispatch, coords, id) => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=96c2fc4713551153e7966978b449861a`)
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

export const fetchWeatherByCoordsAction = (dispatch) => {
    const id = 0;
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    dispatch(fetchWeatherPending(id));

    if (!navigator.geolocation) {
        const error = 'Geolocation is not supported';
        dispatch(fetchWeatherError(error, id));
        console.log(error);
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            fetchWeather(dispatch, position.coords, id);
        }, err => {
            if (err.code === 1) {
                fetchWeather(dispatch, DEFAULT_COORDS, id);
            } else {
                dispatch(fetchWeatherError(err, id));
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }
        }, options);
    }
}


const mapStateToProps = (state) => ({
    currentCity: getCurrentCity(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeatherByCoords: () => fetchWeatherByCoordsAction(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);