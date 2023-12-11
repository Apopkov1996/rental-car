import { createSlice } from '@reduxjs/toolkit';
import { getCarByIdThunk, getCarsListThunk } from './operations';

const initialState = {
  carsList: [],
  error: null,
  loader: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCarsListThunk.pending, state => {
        state.loader = true;
      })
      .addCase(getCarsListThunk.fulfilled, (state, action) => {
        state.loader = false;
        state.carsList = [...state.carsList, ...action.payload];
      })
      .addCase(getCarsListThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getCarByIdThunk.pending, state => {
        state.loader = true;
      })
      .addCase(getCarByIdThunk.fulfilled, (state, action) => {
        state.loader = false;
        state.selectedCar = action.payload;
      })
      .addCase(getCarByIdThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
