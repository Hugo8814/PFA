import { createSlice, createSelector } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    budget: [],
    transactions: [],
  },
  reducers: {
    setBudgetTransactions(state, action) {
      state.transactions = action.payload;
    },
    setBudget(state, action) {
      state.budget = action.payload;
    },
    addBuget(state, action) {
      state.budget.push(action.payload);
    },
    updateBudget(state, action) {
      const { id, category, maximum, theme } = action.payload;
      let budget = state.budget.find((budget) => budget.id === id);
      if (budget) {
        budget.id = id;
        budget.category = category;
        budget.maximum = maximum;
        budget.theme = theme;
      }
    },

    deleteBudget(state, action) {
      const { id } = action.payload;
      console.log(id);
      state.budget = state.budget.filter((budget) => budget.id !== id);
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
          updatedBudget.spent += Math.abs(transactionItem.amount);
        }
      });

      return updatedBudget;
    });
  }
);

export const {
  setBudget,
  setBudgetTransactions,
  addBuget,
  deleteBudget,
  updateBudget,
} = budgetSlice.actions;

export default budgetSlice.reducer;
