import { configureStore } from "@reduxjs/toolkit";
import filterSilce from "./filter-silce";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice, filter: filterSilce },
});

export default store;
