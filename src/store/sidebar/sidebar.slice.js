import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    toggleIsOpen(state, action) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice;
