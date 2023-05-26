import { configureStore } from '@reduxjs/toolkit';
import coordinateReducer from './coordinate/coordinateSlice';
import provinceReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    coordinate: coordinateReducer,
    province: provinceReducer,
  },
});

export default store;
