import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMenuVisible: false,
    isLocationActive: true,
    isGuestActive: false,
  },
  reducers: {
    visibleMenu(state) {
      state.isMenuVisible = true;
    },
    hideMenu(state) {
      state.isMenuVisible = false;
    },
    visibleLocationMenu(state) {
      state.isLocationActive = true;
    },
    hideLocationMenu(state) {
      state.isLocationActive = false;
    },
    visibleGuestMenu(state) {
      state.isGuestActive = true;
    },
    hideGuestMenu(state) {
      state.isGuestActive = false;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
