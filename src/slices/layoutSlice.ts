import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isShowContactModal: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleShowContactModal: (state, action: PayloadAction<boolean>) => {
      state.isShowContactModal = action.payload;
    },
  },
});

export const { toggleShowContactModal } = layoutSlice.actions;

export default layoutSlice.reducer;
