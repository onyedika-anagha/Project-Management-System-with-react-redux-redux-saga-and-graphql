import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTION_TYPES } from "./user.types";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    userId: null,
    isLoggedIn: false,
    isLoading: true,
    error: null,
  },

  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    logout(state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.currentUser = null;
      state.userId = null;
    },
    setError(state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
