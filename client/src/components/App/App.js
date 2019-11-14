import React from 'react';
import './App.scss';
import AddCity from '../AddCity/AddCityContainer';
import WeatherList from '../WeatherList/WeatherListContainer';
import Weather from '../Weather/Weather';
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
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
          <div className='control' style={{'width': '67%', alignSelf: 'flex-start'}}>
            <h2>Weather here</h2>
            <button onClick={() => this.props.fetchWeatherByCoords()}>Update geolocation</button>
          </div>
          <Weather key={0} data={this.props.currentCity} fetchWeather={() => this.props.fetchWeatherByCoords()}/>
          <div className='control favourites'>
            <h2>Favorites</h2>
            <AddCity />
          </div>
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
