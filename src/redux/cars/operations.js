import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const expenseApi = axios.create({
  baseURL: 'https://6570563d09586eff66412846.mockapi.io/',
});

export const getCarsListThunk = createAsyncThunk(
  'getCars',
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await expenseApi.get(`adverts`, {
        params: {
          page: page,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCarByIdThunk = createAsyncThunk(
  'getCarById',
  async (carId, thunkApi) => {
    try {
      const { data } = await expenseApi.get(`adverts/${carId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
