import React from "react";
import WeatherList from "./WeatherList";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { INITIAL_STATE } from "../../constants";
import thunk from "redux-thunk";

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

const mockStore = configureMockStore([thunk]);
const state = INITIAL_STATE;
state.currentCity.weather = correctData;
state.currentCity.pending = false;

const store = mockStore(state);

it("Filled WeatherList display correctly", () => {
  const cities = [
    { id: 1, pending: false, weather: correctData },
    { id: 2, pending: false, error: {} }
  ];
  const component = renderer.create(
    <Provider store={store}>
      <WeatherList
        cities={cities}
        fetchWeatherByName={() => {}}
        deleteCity={() => {}}
        fetchCities={() => {}}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Empty WeatherList display correctly", () => {
  const component = renderer.create(
    <Provider store={store}>
      <WeatherList
        cities={[]}
        fetchWeatherByName={() => {}}
        deleteCity={() => {}}
        fetchCities={() => {}}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Fetching WeatherList display correctly", () => {
  const component = renderer.create(
    <Provider store={store}>
      <WeatherList
        cities={[]}
        fetchWeatherByName={() => {}}
        deleteCity={() => {}}
        fetchCities={() => {}}
        error={null}
        isFetching={true}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Error while fetching WeatherList", () => {
  const component = renderer.create(
    <Provider store={store}>
      <WeatherList
        cities={[]}
        fetchWeatherByName={() => {}}
        deleteCity={() => {}}
        fetchCities={() => {}}
        error={1}
        isFetching={true}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Cities is a string, not an array", () => {
  const component = renderer.create(
    <Provider store={store}>
      <WeatherList
        cities={""}
        fetchWeatherByName={() => {}}
        deleteCity={() => {}}
        fetchCities={() => {}}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
