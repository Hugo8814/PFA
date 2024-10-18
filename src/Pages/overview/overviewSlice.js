import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setPots } from "../pots/PotSlice";
import { setBudget, setBudgetTransactions } from "../budgets/budgetSlice";
import { setTransactions } from "../transactions/transactionSlice";
import { setRecurring } from "../recurringBills/recurringSlice";

// Step 2: Create Async Thunk for Fetching Data
export const fetchOverviewData = createAsyncThunk(
  "overview/fetchOverviewData",
  async (_, { dispatch }) => {
    const response = await fetch("http://127.0.0.1:9000/api");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Log the received data to ensure it's correct
    console.log("Data received from API:", data);

    // Dispatch to populate  data slices
    dispatch(setBudget(data.budgets));
    dispatch(setBudgetTransactions(data.transactions));
    dispatch(setTransactions(data.transactions));
    dispatch(setPots(data.pots));
    dispatch(setRecurring(data.transactions));

    return data; // Return the entire API response
  }
);

// Step 3: Create Slice
const overviewSlice = createSlice({
  name: "overview",
  initialState: {
    data: {
      balance: {
        current: 0,
        income: 0,
        expenses: 0,
      },
    },
    status: "idle", // to track the status of the API call
    error: null, // to track any errors that occur during the API call
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOverviewData.pending, (state) => {
        state.status = "loading"; // Set loading state
      })
      .addCase(fetchOverviewData.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set succeeded state
        state.data = action.payload; // Store the API response in the state
      })
      .addCase(fetchOverviewData.rejected, (state, action) => {
        state.status = "failed"; // Set failed state
        state.error = action.error.message; // Store error message
      });
  },
});

export const {
  setPotsData,
  setBudgetsData,
  setTransactionsData,
  setRecurringBillsData,
} = overviewSlice.actions;

export const selectOverviewData = (state) => state.overview.data;
export const selectOverviewStatus = (state) => state.overview.status;
export const selectOverviewError = (state) => state.overview.error;

// Step 5: Export the reducer
export default overviewSlice.reducer;
