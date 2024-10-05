import { configureStore } from "@reduxjs/toolkit";

import overviewReducer from "./Pages/overview/overviewSlice";

import potReducer from "./Pages/pots/PotSlice";
import modalReducer from "./ui/modalSlice";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
    pots: potReducer,
    modal: modalReducer,
  },
});

export default store;
