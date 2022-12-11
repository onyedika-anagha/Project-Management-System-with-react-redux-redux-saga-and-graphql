import { createSelector } from "reselect";
const selectClientReducer = (state) => state.client;

export const selectAllClients = createSelector(
  [selectClientReducer],
  (client) => client.clients
);
export const selectClient = createSelector(
  [selectClientReducer],
  (client) => client.currentClient
);
