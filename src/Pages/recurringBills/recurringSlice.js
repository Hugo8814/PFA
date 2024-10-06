import { createSlice } from "@reduxjs/toolkit";

const recurringSlice = createSlice({
  name: "recurring",
  initialState: {
    paid: 0,
    total: 0,
    due: 0,
    paidbills: 0,
    totalUpcoming: 0,
    dueSoon: 0,
  },
  reducers: {
    setRecurringData(state, action) {
      state.paidbills = action.payload.paidBills;
      state.totalUpcoming = action.payload.totalUpcoming;
      state.dueSoon = action.payload.dueSoon;
      state.paid = action.payload.paid;
      state.total = action.payload.total;
      state.due = action.payload.due;

      console.log("this is it", state.paidbills);
    },
  },
});

export const { setRecurringData } = recurringSlice.actions;
export const getReData = (state) => state.recurring;

export default recurringSlice.reducer;
