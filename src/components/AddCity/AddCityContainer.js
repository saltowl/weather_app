import {connect} from 'react-redux';
import {addCity, deleteCity} from '.../store/actions';
import AddCity from './AddCity';

const mapStateToProps = (state) => ({
    nextCityId: state.nextCityId,
    cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
    addCity: (name) => dispatch(addCity(name)),
    deleteCity: (id) => dispatch(deleteCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);