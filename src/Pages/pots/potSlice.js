import { createSelector, createSlice } from "@reduxjs/toolkit";

const potSlice = createSlice({
  name: "pots",
  initialState: [],
  reducers: {
    increasePot(state, action) {
      const { id, amount } = action.payload;
      const pot = state.find((pot) => pot.id === id);
      if (pot) {
        pot.total += amount;
      }
    },
    decreasePot(state, action) {
      const { id, amount } = action.payload;
      const pot = state.find((pot) => pot.id === id);
      if (pot) {
        pot.total -= amount;
      }
    },
    deletePot(state, action) {
      const { id } = action.payload;
      return state.filter((pot) => pot.id !== id);
    },
    setPots(state, action) {
      return action.payload;
    },
    addPot(state, action) {
      state.push(action.payload);
    },
    updatePot(state, action) {
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
  addPot,
  updatePot,
} = potSlice.actions;

export const getPotsData = (state) => state.pots;

export const getPotTotal = createSelector([getPotsData], (pots) =>
  pots.reduce((total, pot) => total + pot.total, 0)
);

export default potSlice.reducer;
