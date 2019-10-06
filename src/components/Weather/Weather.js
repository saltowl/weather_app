import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWeather();
  }
  
  render() {
    if (this.props.data.pending === false) {
      return (
        <div className="Weather">
          {this.props.data.name}
          {this.props.data.weather.weather[0].main}
          {this.props.data.id !== 0 && 
            <button onClick={this.props.deleteCity}>x</button>
          }
        </div>
      );
    } else if (this.props.data.id !== 0) {
      return (
        <div className="Weather">{this.props.data.name}</div>
      );
    } else {
      return (
        <div className="Weather">{this.props.data.id}</div>
      );
    }
  }
}

export default Weather;
