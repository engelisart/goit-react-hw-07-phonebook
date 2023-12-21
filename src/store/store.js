import { configureStore } from '@reduxjs/toolkit';
import { phoneReducer } from './createSlice';

export const store = configureStore({
  reducer: {
    phonebook: phoneReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});
