// src/features/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addModalSlice = createSlice({
  name: "addModal",
  initialState: {
    isOpen: false,
    content: null,
    value: "",
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
    setValue: (state, action) => {
      state.value = action.payload;
      console.log("Set value: ", state.value);
    },
  },
});

export const { openModal, closeModal, setValue } = addModalSlice.actions;

export default addModalSlice.reducer;
