import React from 'react';
import './App.css';
import AddCity from '../AddCity/AddCityContainer';
import WeatherList from '../WeatherList/WeatherListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <AddCity />
        <WeatherList />
      </div>
    );
  }
}

export default App;
