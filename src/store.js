import { configureStore } from "@reduxjs/toolkit";

import overviewReducer from "./Pages/overview/overviewSlice";

import potReducer from "./Pages/pots/PotSlice";
import addModalReducer from "./ui/addModalSlice";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
    pots: potReducer,
    addModal: addModalReducer,
  },
});

export default store;
