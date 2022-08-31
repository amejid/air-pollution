import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '../../api/APIConfig';

const GET_COUNTRIES = 'pollutionApp/GET_COUNTRIES';

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_COUNTRIES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

const transformData = (data) => data.map((obj) => obj.country);

export const getCountries = createAsyncThunk(GET_COUNTRIES, async () => {
  const response = await fetch(`${API_URL}countries?${API_KEY}`);
  const data = await response.json();
  const transformed = transformData(data.data);

  return transformed;
});

export default countriesReducer;
