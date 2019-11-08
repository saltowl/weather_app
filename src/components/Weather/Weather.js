import React from "react";
import Loader from "../Loader/Loader";
import "./Weather.scss";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    if (typeof this.props.data !== 'undefined') {
      this.state = {
        pending:
          typeof this.props.data.pending !== "undefined"
            ? this.props.data.pending
            : true,
        isError: typeof this.props.data.error !== "undefined",
        isCurrentCity: this.props.data.id === 0
      };
    } else {
      this.state = {
        isError: false,
        isCurrentCity: true,
        error: 'Cannot get current city'
      };
    }
  }

  componentDidMount() {
    this.props.fetchWeather();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      typeof prevState.error === 'undefined' &&
      typeof nextProps.data.pending !== "undefined" &&
      nextProps.data.pending !== prevState.pending
    ) {
      return {
        pending: nextProps.data.pending,
        isError: typeof nextProps.data.error !== "undefined"
      };
    } else return null;
  }

  render() {
    const cityInWeatherList = !this.state.isCurrentCity;
    
    const styleWeather = cityInWeatherList
      ? { flexDirection: "column" }
      : { flexDirection: "row", width: "100%", fontSize: "30px" };
    const styleMainInfo = cityInWeatherList
      ? { flexDirection: "row" }
      : { flexDirection: "column", width: "50%", paddingRight: "20px" };
    const dataRow = cityInWeatherList
      ? { width: "100%" }
      : { width: "50%", paddingLeft: "20px", boxSizing: "border-box" };

    if (this.state.isError) {
      const error = this.props.data.error;
      let notFound = false;
      if (typeof error.response !== "undefined") {
        notFound = error.response.status === 404;
      }
      return (
        <div className="Weather error">
          {notFound ? (
            <div>{this.props.data.name} isn't found</div>
          ) : (
            <div>Poor connection. Please, try again later</div>
          )}
          {cityInWeatherList && (
            <button onClick={this.props.deleteCity} className="circle">
              x
            </button>
          )}
        </div>
      );
    } else if (!this.state.pending && typeof this.state.error === 'undefined') {
      const data = this.props.data.weather;

      const temp = `${data.main.temp < 0 ? "" : "+"}${data.main.temp.toFixed(
        1
      )}°C`;
      const icon = !this.state.isCurrentCity
        ? `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        : `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`;
      const description =
        data.weather[0].description[0].toUpperCase() +
        data.weather[0].description.substr(1);
      const rot = `rotate(${data.wind.deg}deg)`;
      const windDirStyle = {
        WebkitTransform: rot,
        msTransform: rot,
        OTransform: rot,
        transform: rot
      };
      const windSpeed = `${data.wind.speed} m/s`;
      const pressure = `${(data.main.pressure * 0.75006375541921).toFixed(
        0
      )} mmHg`;
      const humidity = `${data.main.humidity}%`;
      const coords = [data.coord.lon, data.coord.lat];

      return (
        <div className="Weather" style={styleWeather}>
          <div className="mainInfo" style={styleMainInfo}>
            <div className={this.state.isCurrentCity ? "currentName" : "name"}>
              {data.name}
            </div>
            <div
              className={`${
                this.state.isCurrentCity ? "current" : ""
              } cityMain`}
            >
              <div className={this.state.isCurrentCity ? "temp" : ""}>
                {temp}
              </div>
              <img src={icon} title={description} />
            </div>
            <div className={this.state.isCurrentCity ? "current" : ""}>
              {cityInWeatherList && (
                <button onClick={this.props.deleteCity} className="circle">
                  x
                </button>
              )}
            </div>
          </div>
          <div style={dataRow}>
            <div className="row">
              <div className="rowKey">Wind:</div>
              <div className="rowVal">
                <div id="wind">
                  <div id="N">N</div>
                  <div id="W">W</div>
                  <div id="windDirection">
                    <div style={windDirStyle}>↑</div>
                  </div>
                  <div id="E">E</div>
                  <div id="S">S</div>
                </div>
                {windSpeed}
              </div>
            </div>
            <div className="row">
              <div className="rowKey">Clouds:</div>
              <div className="rowVal">{data.clouds.all}%</div>
            </div>
            <div className="row">
              <div className="rowKey">Pressure:</div>
              <div className="rowVal">{pressure}</div>
            </div>
            <div className="row">
              <div className="rowKey">Humidity:</div>
              <div className="rowVal">{humidity}</div>
            </div>
            <div className="row">
              <div className="rowKey">Coords:</div>
              <div className="rowVal">
                [{coords[0]}, {coords[1]}]
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.pending && typeof this.state.error === 'undefined') {
      return (
        <div className="Weather" style={{ justifyContent: "flex-start" }}>
          {cityInWeatherList && (
            <div style={{ padding: "8px" }}>{this.props.data.name}</div>
          )}
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="Weather">
          {this.state.error}
        </div>
      );
    }
  }
}

export default Weather;
