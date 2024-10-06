import { configureStore } from "@reduxjs/toolkit";

import overviewReducer from "./Pages/overview/overviewSlice";

import potReducer from "./Pages/pots/PotSlice";
import modalReducer from "./ui/modalSlice";
import recurringReducer from "./Pages/recurringBills/recurringSlice";
import budgetReducer from "./Pages/budgets/budgetSlice";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
    pots: potReducer,
    modal: modalReducer,
    recurring: recurringReducer,
    budgets: budgetReducer,
  },
});

export default store;
