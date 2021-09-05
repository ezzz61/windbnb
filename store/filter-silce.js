import { createSlice } from "@reduxjs/toolkit";
import stays from "../stays.json";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    staysLocation: stays,
    filtredLocation: stays,
    location: "",
    guests: 1,
    adult: 1,
    kid: 0,
  },
  reducers: {
    inputGuests(state, payload) {
      state.guests = payload.payload;
    },
    increase(state, payload) {
      const type = payload.payload;
      if (type === "adult" && state.adult < 10) {
        state.adult = state.adult + 1;
        state.guests = state.guests + 1;
      }
      if (type === "kid" && state.kid < 10) {
        state.kid = state.kid + 1;
        state.guests = state.guests + 1;
      }
    },
    decrease(state, payload) {
      const type = payload.payload;
      if (type === "adult" && state.adult > 0) {
        state.adult = state.adult - 1;
        state.guests = state.guests - 1;
      }
      if (type === "kid" && state.kid > 0) {
        state.kid = state.kid - 1;
        state.guests = state.guests - 1;
      }
    },
    setLocation(state, payload) {
      state.location = payload.payload;
    },
    filterStaysLocation(state, payload) {
      state.filtredLocation = payload.payload;
    },
    resetFilter(state) {
      state.filtredLocation = state.staysLocation;
    },
  },
});

export const filterAction = filterSlice.actions;
export default filterSlice.reducer;
