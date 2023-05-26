import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=gGFJYlAUYd8EG3VvYGevUXpir8LdhuJy';

export const initialState = {
  cities: [],
};

export const getCoordinates = createAsyncThunk('coordinate/getCoordinate', async (q) => {
  const resp = await fetch(`${url}&q=${q}`, { method: 'GET' });
  const data = await resp.json();
  return data[0];
});

const coordinateSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    clearContainer: (state) => {
      state.cities = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoordinates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCoordinates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cities.push(action.payload);
    });
    builder.addCase(getCoordinates.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { clearContainer } = coordinateSlice.actions;

export default coordinateSlice.reducer;
