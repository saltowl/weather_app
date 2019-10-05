import React from 'react';
import Weather from '../Weather/Weather';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="WeatherList">
          {this.props.cities.map(city => (
              <Weather key={city.id} data={city} fetchWeather={() => this.props.fetchWeather(city.id, city.name)} />
          ))}
      </div>
    );
  }
}

export default WeatherList;
