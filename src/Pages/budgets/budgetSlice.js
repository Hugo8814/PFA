import { createSlice, createSelector } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    budget: [],
    transactions: [],
  },
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    setBudget(state, action) {
      state.budget = action.payload;
    },
  },
});

// Selector to get budgets and transactions
const selectBudgets = (state) => state.budget.budget || [];
const selectTransactions = (state) => state.budget.transactions || [];

// Memoized selector to calculate spent amounts for each budget item
export const getBudgetData = createSelector(
  [selectBudgets, selectTransactions],
  (budgets, transactions) => {
    return budgets.map((budgetItem) => {
      const updatedBudget = { ...budgetItem, spent: 0 };

      transactions.forEach((transactionItem) => {
        const transactionID = transactionItem.category;

        // Check if the transaction belongs to the current budget
        if (transactionID === updatedBudget.category) {
          updatedBudget.spent += transactionItem.amount;
          console.log(transactionItem);
        }
      });

      return updatedBudget;
    });
  }
);

export const { setBudget, setTransactions } = budgetSlice.actions;

export default budgetSlice.reducer;
