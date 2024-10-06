import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budgets",
  initialState: [],
  reducers: {
    setBudget(state, action) {
      console.log("Set pots: ", action.payload);
      return action.payload; // Replace the entire array of pots directly
    },
  },
});

export const { setBudget } = budgetSlice.actions;

export default budgetSlice;
