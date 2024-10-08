import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { setPots } from "../pots/PotSlice";

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
    dispatch(setPots(data.pots));

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
      transactions: [],
      recurringBills: [],
      budgets: [],
      pots: [],
    },
    status: "idle", // to track the status of the API call
    error: null, // to track any errors that occur during the API call
  },
  reducers: {
    setPotsData(state, action) {
      state.data.pots = action.payload; // Set pots data
    },
    setBudgetsData(state, action) {
      state.data.budgets = action.payload; // Set budgets data
    },
    setTransactionsData(state, action) {
      state.data.transactions = action.payload; // Set transactions data
    },
    setRecurringBillsData(state, action) {
      state.data.recurringBills = action.payload; // Set recurring bills data
    },
  },
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

export const getPotsTotal = (state) =>
  state.overview.data.pots.reduce((total, item) => total + item.total, 0);

export const getBugetData = (state) => state.overview.data.budgets;
export const getBugetTotal = (state) =>
  state.overview.data.budgets.reduce((total, item) => total + item.maximum, 0);

// Selector to safely access transactions
export const selectTransactions = (state) =>
  state.overview.data?.transactions || [];

// Memoized selector to filter recurring transactions
export const getRecurringData = createSelector(
  [selectTransactions], // Input selector
  (transactions) => transactions.filter((item) => item.recurring) // Filter for recurring items
);

// Memoized selector to calculate the total amount of recurring transactions
export const getRecurringTotal = createSelector(
  [getRecurringData], // Input from getRecurringData
  (recurringTransactions) =>
    recurringTransactions.reduce((total, item) => total + item.amount, 0) // Calculate total
);

// Step 5: Export the reducer
export default overviewSlice.reducer;
