import React from "react";
import WeatherList from "./WeatherList";
import renderer from "react-test-renderer";

const correctData = {
  base: "stations",
  clouds: { all: 75 },
  cod: 200,
  coord: { lon: 37.62, lat: 55.75 },
  dt: 1572515073,
  id: 524901,
  main: {
    temp: -2.4,
    pressure: 1021,
    humidity: 79,
    temp_min: -3,
    temp_max: -1.11
  },
  name: "Moscow",
  sys: {
    type: 1,
    id: 9027,
    country: "RU",
    sunrise: 1572496341,
    sunset: 1572530028
  },
  timezone: 10800,
  visibility: 10000,
  weather: [
    { id: 620, main: "Snow", description: "light shower snow", icon: "13d" }
  ],
  wind: { speed: 6, deg: 290 }
};

it("Filled WeatherList display correctly", () => {
  const cities = [
    { id: 1, pending: false, weather: correctData },
    { id: 2, pending: false, error: {} }
  ];
  const component = renderer.create(
    <WeatherList
      cities={cities}
      fetchWeatherByName={() => {}}
      deleteCity={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Empty WeatherList display correctly", () => {
  const component = renderer.create(
    <WeatherList
      cities={[]}
      fetchWeatherByName={() => {}}
      deleteCity={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
