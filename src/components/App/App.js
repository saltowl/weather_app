import React from 'react';
import './App.css';
import AddCity from '../AddCity/AddCityContainer';
import WeatherList from '../WeatherList/WeatherListContainer';
import Weather from '../Weather/Weather';
import Clouds from '../Clouds/Clouds';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Clouds />
      <div className="App">
          <div>
            Weather here
        <button onClick={() => this.props.fetchWeatherByCoords()}>Update geolocation</button>
          </div>
        <Weather key={0} data={this.props.currentCity} fetchWeather={() => this.props.fetchWeatherByCoords()}/>
          <div>
            Favorites
        <AddCity />
          </div>
        <WeatherList />
      </div>
      </div>
    );
  }
}

export default App;
