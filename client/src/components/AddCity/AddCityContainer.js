import { connect } from "react-redux";
import {
  addCityPending,
  addCitySuccess,
  addCityError
} from "../../store/actions";
import AddCity from "./AddCity";
import { getCities } from "../../store/reducers";
import axios from "axios";
import { API } from "../../constants";

const addCityAction = name => {
  return dispatch => {
    dispatch(addCityPending(name));
    axios
      .post(`${API}favourites`, { name })
      .then(response => {
        const city = {
          id: response.data.city._id,
          name: response.data.city.name
        };
        dispatch(addCitySuccess(city));
      })
      .catch(error => {
        dispatch(addCityError(error));
      });
  };
};

const mapStateToProps = state => ({
  cities: getCities(state)
});

const mapDispatchToProps = dispatch => ({
  addCity: name => dispatch(addCityAction(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
