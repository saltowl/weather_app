import { connect } from "react-redux";
import { addCity, deleteCity } from "../../store/actions";
import AddCity from "./AddCity";
import { getNextCityId, getCities } from "../../store/reducers";

const mapStateToProps = state => ({
  nextCityId: getNextCityId(state),
  cities: getCities(state)
});

const mapDispatchToProps = dispatch => ({
  addCity: name => dispatch(addCity(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
