import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';

// Redux store configuration
export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});