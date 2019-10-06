import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/AppContainer';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import {INITIAL_STATE} from './constants';

const cities = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : [];
const nextCityId = cities.length > 0 
    ? cities.reduce((prev, cur) => {
        return Math.max(prev.id, cur.id);
    }, {id: 0}) + 1 
    : 1;

const state = {
    ...INITIAL_STATE, 
    weatherList: {
        ...INITIAL_STATE.weatherList, 
        cities, 
        nextCityId
    }
};

const store = createStore(rootReducer, state, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState().weatherList.cities.map(city => ({id: city.id, name: city.name})));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
