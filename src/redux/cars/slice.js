import { createSlice } from '@reduxjs/toolkit';
import { getCarByIdThunk, getCarsListThunk } from './operations';

const initialState = {
  carsList: [],
  error: null,
  loader: false,
  currentPage: 1,
  totalItems: 0,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarsListThunk.pending, state => {
        state.loader = true;
      })
      .addCase(getCarsListThunk.fulfilled, (state, action) => {
        state.carsList = [...state.carsList, ...action.payload];
        state.loader = false;
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

export const { setTotalItems } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
