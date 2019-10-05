import React from 'react';


class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchWeather();
  }
  
  render() {
    if (this.props.data.pending === false) {
      return (
        <div className="Weather">
          {this.props.data.name}
          {this.props.data.weather.weather[0].main}
        </div>
      );
    } else {
      return (
        <div className="Weather">{this.props.data.name}</div>
      );
    }
  }
}

export default Weather;
