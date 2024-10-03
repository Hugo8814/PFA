import { configureStore } from "@reduxjs/toolkit";

import overviewReducer from "./Pages/overview/overviewSlice";

import potReducer from "./Pages/pots/potSlice";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
    pots: potReducer,
  },
});

export default store;
