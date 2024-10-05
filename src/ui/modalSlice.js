// src/features/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isAddOpen: false,
    isWithdrawOpen: false,
    content: null,
    value: "",
  },

  reducers: {
    openAddModal: (state, action) => {
      state.isAddOpen = true;
      state.content = action.payload;
      state.value = "";
    },
    openWithdrawModal: (state, action) => {
      state.isWithdrawOpen = true;
      state.content = action.payload;
      state.value = "";
    },
    closeModal: (state) => {
      state.isAddOpen = false;
      state.isWithdrawOpen = false;
      state.content = null;
    },
    setValue: (state, action) => {
      state.value = action.payload;
      console.log("Set value: ", state.value);
    },
  },
});

export const { openAddModal, openWithdrawModal, closeModal, setValue } =
  modalSlice.actions;

export default modalSlice.reducer;
