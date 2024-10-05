// src/features/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: null,
    value: "",
  },

  reducers: {
    openAddModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
      state.value = "";
    },
    openWithdrawModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
      state.value = "";
    },
    closeModal: (state) => {
      state.isOpen = false;
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
