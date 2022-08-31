import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '../../api/APIConfig';

const GET_CITIES = 'pollutionApp/country/state/GET_CITIES';

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_CITIES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

const transformData = (data) => data.map((obj) => obj.city);

export const getCities = createAsyncThunk(GET_CITIES, async (detailData) => {
  const { country, stateName } = detailData;

  const response = await fetch(`${API_URL}cities?state=${stateName}&country=${country}&${API_KEY}`);
  const data = await response.json();
  const transformed = transformData(data.data);

  return transformed;
});

export default citiesReducer;
