import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    clients: null,
    currentClient: null,
    loading: null,
    error: null,
  },
  reducers: {
    setClients(state, action) {
      state.clients = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCurrentClient(state, action) {
      state.currentClient = action.payload;
    },
  },
});

export const { setClients, setCurrentClient } = clientSlice.actions;
export default clientSlice;
