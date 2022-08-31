import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '../../api/APIConfig';

const GET_METRICS = 'pollutionApp/country/state/city/GET_METRICS';

const metricsReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_METRICS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const getMetrics = createAsyncThunk(GET_METRICS, async (detailData) => {
  const { country, stateName, city } = detailData;

  const response = await fetch(
    `${API_URL}city?city=${city}&state=${stateName}&country=${country}&${API_KEY}`,
  );
  const data = await response.json();

  return data.data;
});

export default metricsReducer;
