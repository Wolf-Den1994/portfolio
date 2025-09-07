import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalProject = {
  text: string;
  prevText?: string;
};

type LayoutState = {
  isShowContactModal: boolean;
  modalProject: ModalProject | null;
};

const initialState: LayoutState = {
  isShowContactModal: false,
  modalProject: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleShowContactModal: (state, action: PayloadAction<boolean>) => {
      state.isShowContactModal = action.payload;
    },
    toggleShowProjectModal: (state, action: PayloadAction<ModalProject | null>) => {
      state.modalProject = action.payload;
    },
  },
});

export const { toggleShowContactModal, toggleShowProjectModal } = layoutSlice.actions;

export default layoutSlice.reducer;
