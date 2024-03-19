import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layoutSlice';
import settingsReducer from './settings';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
