import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const expenseApi = axios.create({
  baseURL: 'https://6570563d09586eff66412846.mockapi.io/',
});

export const getCarsListThunk = createAsyncThunk(
  'getCars',
  async (page, thunkApi) => {
    try {
      const { data } = await expenseApi.get(`adverts?page=${page}&limit=12`);
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
