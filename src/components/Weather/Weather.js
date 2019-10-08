import React from 'react';
import Loader from '../Loader/Loader';
import './Weather.scss';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWeather();
  }
  
  render() {
    const styleWeather = this.props.data.id !== 0 ? {flexDirection: 'column'} : {flexDirection: 'row', width: '100%', fontSize: '30px'};
    const styleMainInfo = this.props.data.id !== 0 ? {flexDirection: 'row'} : {flexDirection: 'column', width: '50%', paddingRight: '20px'};
    const styleCurrentCityMain = this.props.data.id !== 0 ? {} : {flexDirection: 'row-reverse', width: '100%', paddingRight: '20px'};
    const styleCurrentCityTemp = this.props.data.id !== 0 ? {} : {fontSize: '50px'};
    const styleCurrentCityName = this.props.data.id !== 0 ? {} : {alignSelf: 'flex-start'};
    const dataRow = this.props.data.id !== 0 ? {width: '100%'} : {width: '50%', paddingLeft: '20px', boxSizing: 'border-box'};
    const styleError = {color: '#FC000D', flexDirection: 'row'};

    if (this.props.data.error) {
      const error = this.props.data.error;
      return (
        <div className="Weather" style={styleError}>
          {error.response.status === 404 &&
              <div>{this.props.data.name} isn't found</div>
          }
          <button onClick={this.props.deleteCity} className='circle'>x</button>
        </div>
      );
    } else if (this.props.data.pending === false) {
      const data = this.props.data.weather;

      const temp = `${(data.main.temp < 0 ? '' : '+')}${(data.main.temp).toFixed(1)} °C`;
      const icon = this.props.data.id !== 0 
      ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` 
      : `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`;
      const description = data.weather[0].description[0].toUpperCase() + data.weather[0].description.substr(1);
      const rot = `rotate(${data.wind.deg}deg)`;
      const windDirStyle = {
        WebkitTransform: rot,
        msTransform: rot,
        OTransform: rot,
        transform: rot
      };
      const windSpeed = `${data.wind.speed} m/s`;
      const pressure = `${(data.main.pressure * 0.75006375541921).toFixed(0)} mmHg`;
      const humidity = `${data.main.humidity}%`;
      const coords = [data.coord.lon, data.coord.lat];

      return (
        <div className="Weather" style={styleWeather}>
          <div className="mainInfo" style={styleMainInfo}>
            <div style={styleCurrentCityName}>{data.name}</div>
            <div style={styleCurrentCityMain}>
              <div style={styleCurrentCityTemp}>{temp}</div>
              <img src={icon} title={description} />
            </div>
            <div style={styleCurrentCityMain}>
              {this.props.data.id !== 0 && 
                <button onClick={this.props.deleteCity} className='circle'>x</button>
              }
            </div>
          </div>
          <div style={dataRow}>
            <div className='row'>
              <div className='rowKey'>Wind:</div>
              <div className='rowVal'>
                <div id='wind'>
                  <div id='N'>N</div>
                  <div id='W'>W</div>
                  <div id='windDirection'><div style={windDirStyle}>↑</div></div>
                  <div id='E'>E</div>
                  <div id='S'>S</div>
                </div>
                {windSpeed} 
              </div>
            </div>
            <div className='row'>
              <div className='rowKey'>Clouds:</div>
              <div className='rowVal'>{data.clouds.all}%</div>
            </div>
            <div className='row'>
              <div className='rowKey'>Pressure:</div>
              <div className='rowVal'>{pressure}</div> 
            </div>
            <div className='row'>
              <div className='rowKey'>Humidity:</div>
              <div className='rowVal'>{humidity}</div>
            </div>
            <div className='row'>
              <div className='rowKey'>Coords:</div>
              <div className='rowVal'>[{coords[0]}, {coords[1]}]</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Weather" style={{justifyContent: 'flex-start'}}>
            {this.props.data.id !== 0 && 
              <div style={{padding: '8px'}}>{this.props.data.name}</div>
            }
            <Loader />
        </div>
      );
    }
  }
}

export default Weather;
