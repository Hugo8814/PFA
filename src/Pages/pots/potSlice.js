import { createSlice } from "@reduxjs/toolkit";

const potSlice = createSlice({
  name: "pots",
  initialState: [], // Just store an array directly, not an object with `pots` inside
  reducers: {
    increasePot(state, action) {
      const { id, amount } = action.payload;
      const pot = state.find((pot) => pot.id === id); // Update directly on the array
      if (pot) {
        pot.total += amount;
      }
    },
    decreasePot(state, action) {
      const { id, amount } = action.payload;
      const pot = state.find((pot) => pot.id === id); // Update directly on the array
      if (pot) {
        pot.total -= amount;
      }
    },
    setPots(state, action) {
      return action.payload; // Replace the entire array of pots directly
    },
  },
});

export const { increasePot, setPots, decreasePot } = potSlice.actions; // Export actions

export const getPotsData = (state) => state.pots;

export default potSlice.reducer;
