import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/cities';
import countriesReducer from './countries/countries';
import metricsReducer from './metrics/metrics';
import statesReducer from './states/states';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    states: statesReducer,
    cities: citiesReducer,
    metrics: metricsReducer,
  },
});

export default store;
