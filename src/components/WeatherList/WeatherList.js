import React from 'react';
import Weather from '../Weather/Weather';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
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
