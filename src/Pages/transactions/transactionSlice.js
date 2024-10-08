import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    query: [],
    transactions: [],
  },

  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
  },
});
export const { setTransactions } = transactionSlice.actions;

export const getTransactions = (state) => state.transactions.transactions;
export default transactionSlice.reducer;
