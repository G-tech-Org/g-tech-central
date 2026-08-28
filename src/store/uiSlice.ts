import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  isQuoteModalOpen: boolean;
}

const initialState: UIState = {
  darkMode: false,
  isQuoteModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload;
    },
    openQuoteModal(state) {
      state.isQuoteModalOpen = true;
    },
    closeQuoteModal(state) {
      state.isQuoteModalOpen = false;
    },
    toggleQuoteModal(state) {
      state.isQuoteModalOpen = !state.isQuoteModalOpen;
    },
  },
});

export const {
  toggleDarkMode,
  setDarkMode,
  openQuoteModal,
  closeQuoteModal,
  toggleQuoteModal,
} = uiSlice.actions;
export default uiSlice.reducer;
