import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  isQuoteModalOpen: boolean;
  selectedQuoteService: string | null;
}

const initialState: UIState = {
  darkMode: false,
  isQuoteModalOpen: false,
  selectedQuoteService: null,
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
    openQuoteModal(state, action: PayloadAction<string | undefined>) {
      state.isQuoteModalOpen = true;
      state.selectedQuoteService = action.payload ?? null;
    },
    selectQuoteService(state, action: PayloadAction<string>) {
      state.selectedQuoteService = action.payload;
    },
    closeQuoteModal(state) {
      state.isQuoteModalOpen = false;
      state.selectedQuoteService = null;
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
  selectQuoteService,
  closeQuoteModal,
  toggleQuoteModal,
} = uiSlice.actions;
export default uiSlice.reducer;
