import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getTransactions } from "../transactions/transactionSlice"; // Import the transactions selector

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    budget: [],
  },
  reducers: {
    setBudget(state, action) {
      state.budget = action.payload;
    },
    addBuget(state, action) {
      state.budget = [...state.budget, action.payload];
    },
    updateBudget(state, action) {
      const { id, category, maximum, theme } = action.payload;
      const index = state.budget.findIndex((budget) => budget.id === id);
      if (index !== -1) {
        state.budget[index] = {
          ...state.budget[index],
          id,
          category,
          maximum,
          theme,
        };
      }
    },
    deleteBudget(state, action) {
      const { id } = action.payload;

      state.budget = state.budget.filter((budget) => budget.id !== id);
    },
  },
});

// Selector to get budgets
const selectBudgets = (state) => state.budget.budget || [];

// Memoized selector to calculate spent amounts for each budget item based on transactions from the transactionSlice
export const getBudgetData = createSelector(
  [selectBudgets, getTransactions], // Use the getTransactions selector from the transactionSlice
  (budgets, transactions) => {
    return budgets.map((budgetItem) => {
      const updatedBudget = { ...budgetItem, spent: 0 };

      // Calculate total spent for the current budget
      transactions.forEach((transactionItem) => {
        if (transactionItem.category === updatedBudget.category) {
          updatedBudget.spent += Math.abs(transactionItem.amount);
        }
      });

      return updatedBudget;
    });
  }
);

// Selector to calculate the total maximum budget
export const getBudgetTotal = createSelector([getBudgetData], (budgetData) => {
  return budgetData.reduce((total, item) => total + Number(item.maximum), 0);
});

// Selector to calculate the total spent budget
export const getBudgetSpent = createSelector([getBudgetData], (budgetData) => {
  return budgetData.reduce((total, item) => total + item.spent, 0);
});

// Export the reducer actions
export const { setBudget, addBuget, deleteBudget, updateBudget } =
  budgetSlice.actions;

// Export the budget reducer as default
export default budgetSlice.reducer;
