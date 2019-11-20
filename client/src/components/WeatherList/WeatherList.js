import React from 'react';
import Weather from '../Weather/Weather';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchCities();
  }
  
  render() {
    if (this.props.error !== null) {
      if (this.props.isFetching) {
        return (
          <div className="WeatherList">
            <Error message={'fetch cities'} />
          </div>
        );
      }

      if (this.props.cityToDelete !== null) {
        alert('Cannot delete city');
      }

      if (this.props.newCity !== null) {
        alert('Cannot add new city');
      }

    } else {
      if (this.props.isFetching) {
        return (
          <div className="WeatherList">
            <Loader message={'cities are fetching'} />
          </div>
        );
      }
    }

    if (Array.isArray(this.props.cities)) {
      return (
        <div className="WeatherList">
            {this.props.cities.map(city => (
                <Weather key={city.id} data={city} fetchWeather={() => this.props.fetchWeatherByName(city.id, city.name)} deleteCity={() => this.props.deleteCity(city.id)} />
            ))}
        </div>
      );
    } else {
      return (
        <div className="WeatherList"></div>
      );
    }
  }
}

export default WeatherList;
