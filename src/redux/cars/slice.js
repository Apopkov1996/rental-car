import { createSlice } from '@reduxjs/toolkit';
import { getCarByIdThunk, getCarsListThunk } from './operations';

const initialState = {
  carsList: [],
  error: null,
  loader: false,
  currentPage: 1,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCarsListThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCarsListThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carsList = action.payload;
      })
      .addCase(getCarsListThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getCarByIdThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCarByIdThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCar = action.payload;
      })
      .addCase(getCarByIdThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
