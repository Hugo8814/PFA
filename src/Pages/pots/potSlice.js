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
    deletePot(state, action) {
      const { id } = action.payload;
      return state.filter((pot) => pot.id !== id);
    },
    setPots(state, action) {
      return action.payload; // Replace the entire array of pots directly
    },
    AddPot(state, action) {
      state.push(action.payload);
    },
    updatePot(state, action) {
      console.log("hi");
      const { id, name, target, theme } = action.payload;
      let pot = state.find((pot) => pot.id === id);
      if (pot) {
        pot.name = name;
        pot.target = target;
        pot.theme = theme;
      }
    },
  },
});

export const {
  increasePot,
  setPots,
  decreasePot,
  deletePot,
  AddPot,
  updatePot,
} = potSlice.actions; // Export actions

export const getPotsData = (state) => state.pots;

export default potSlice.reducer;
