import { connect } from "react-redux";
import * as actions from "../../store/actions";
import axios from "axios";
import WeatherList from "./WeatherList";
import { getCities } from "../../store/reducers";
import { API } from "../../constants";

const fetchWeatherByNameAction = (id, cityName) => {
  return dispatch => {
    dispatch(actions.fetchWeatherPending(id));
    axios
      .get(`${API}weather?city=${cityName}`)
      .then(response => {
        dispatch(actions.fetchWeatherSuccess(response.data, id));
      })
      .catch(error => {
        dispatch(actions.fetchWeatherError(error, id));
      });
  };
};

const deleteCityAction = id => {
  return dispatch => {
    dispatch(actions.deleteCityPending(id));
    axios
      .delete(`${API}favourites/${id}`)
      .then(response => {
        dispatch(actions.deleteCitySuccess(id));
      })
      .catch(error => {
        dispatch(actions.deleteCityError(error));
      });
  };
};

const fetchCitiesAction = () => {
  return dispatch => {
    dispatch(actions.fetchCitiesPending());
    axios
      .get(`${API}favourites`)
      .then(response => {
        const cities = response.data.map(city => ({ name: city.name, id: city._id }));
        dispatch(actions.fetchCitiesSuccess(cities));
      })
      .catch(error => {
        dispatch(actions.fetchCitiesError(error));
      });
  };
};

const mapStateToProps = state => ({
  cities: getCities(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCitiesAction()),
  fetchWeatherByName: (id, name) =>
    dispatch(fetchWeatherByNameAction(id, name)),
  deleteCity: id => dispatch(deleteCityAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
