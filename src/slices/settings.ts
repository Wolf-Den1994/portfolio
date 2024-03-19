import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  language: string;
};

const initialState: SettingsState = {
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
