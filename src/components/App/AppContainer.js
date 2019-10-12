import { connect } from 'react-redux';
import { fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess } from '../../store/actions';
import axios from 'axios';
import { getCurrentCity } from '../../store/reducers';
import App from './App';
import { DEFAULT_COORDS } from '../../constants';

const fetchWeather = (dispatch, coords, id) => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude.toFixed(3)}&lon=${coords.longitude.toFixed(3)}&units=metric&APPID=96c2fc4713551153e7966978b449861a`)
        .then(response => {
            dispatch(fetchWeatherSuccess(response.data, id));
            console.log(response.data);
        })
        .catch(error => {
            dispatch(fetchWeatherError(error, id));
            console.log(error);
        });
}

export const fetchWeatherByCoordsAction = () => {
    return dispatch => {
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
                switch(err.code) {
                    case 1:
                        alert('Permission denied. Load weather from default coordinates');
                        fetchWeather(dispatch, DEFAULT_COORDS, id);
                        break;
                    case 2:
                        alert('Location unavailable. Load weather from default coordinates');
                        fetchWeather(dispatch, DEFAULT_COORDS, id);
                        break;
                    case 3:
                        dispatch(fetchWeatherError(err, id));    
                        break;
                    default:
                        dispatch(fetchWeatherError(err, id));
                        console.warn(`ERROR(${err.code}): ${err.message}`);
                        break;
                }
            }, options);
        }    
    }
}


const mapStateToProps = (state) => ({
    currentCity: getCurrentCity(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeatherByCoords: () => dispatch(fetchWeatherByCoordsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);