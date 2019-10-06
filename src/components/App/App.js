import React from 'react';
import './App.css';
import AddCity from '../AddCity/AddCityContainer';
import WeatherList from '../WeatherList/WeatherListContainer';
import Weather from '../Weather/Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.fetchWeatherByCoords()}>Update geolocation</button>
        <Weather key={0} data={this.props.currentCity} fetchWeather={() => this.props.fetchWeatherByCoords()}/>
        <AddCity />
        <WeatherList />
      </div>
    );
  }
}

export default App;
