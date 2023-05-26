import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://dataservice.accuweather.com/locations/v1/adminareas/PK?apikey=wVYX8onEgfpc4wubmDpbXN1j6YMXbPSH';

export const initialState = {
  provinces: [],
  filtered: [],
};

export const getProvinces = createAsyncThunk('provinces/getProvinces', async () => {
  const resp = await fetch(url, { method: 'GET' });
  const data = await resp.json();
  return data;
});

const provincesSlice = createSlice({
  name: 'provinces',
  initialState,
  reducers: {
    filterProvince: (state, action) => {
      if (action.payload !== '') {
        state.filtered = state.provinces;
        const newArr = state.filtered.filter(
          (province) => province.LocalizedName.includes(action.payload),
        );
        state.filtered = newArr;
      } else {
        state.filtered = state.provinces;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvinces.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProvinces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.provinces = action.payload;
      state.filtered = state.provinces;
    });
    builder.addCase(getProvinces.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterProvince } = provincesSlice.actions;
export default provincesSlice.reducer;
