// src/features/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addModalSlice = createSlice({
  name: "addModal",
  initialState: {
    isOpen: false,
    content: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = addModalSlice.actions;

export default addModalSlice.reducer;
