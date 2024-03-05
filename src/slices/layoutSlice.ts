import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LayoutState = {
  isShowContactModal: boolean;
  textModalProject: string | null;
};

const initialState: LayoutState = {
  isShowContactModal: false,
  textModalProject: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleShowContactModal: (state, action: PayloadAction<boolean>) => {
      state.isShowContactModal = action.payload;
    },
    toggleShowProjectModal: (state, action: PayloadAction<string | null>) => {
      state.textModalProject = action.payload;
    },
  },
});

export const { toggleShowContactModal, toggleShowProjectModal } = layoutSlice.actions;

export default layoutSlice.reducer;
