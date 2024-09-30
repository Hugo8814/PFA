import { configureStore } from "@reduxjs/toolkit";

import overviewReducer from "./Pages/overview/overviewSlice";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
  },
});

export default store;
