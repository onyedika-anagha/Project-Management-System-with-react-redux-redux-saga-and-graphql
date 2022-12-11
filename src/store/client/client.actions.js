import { createAction } from "../../utils/reducer/reducer.utils";
import { CLIENT_ACTION_TYPES } from "./client.types";

export const createSetCurrentClient = (client) =>
  createAction(CLIENT_ACTION_TYPES.SET_CURRENT_CLIENT, client);
// ------------------------------------------------------------------------------

export const createSetClients = (clients) =>
  createAction(CLIENT_ACTION_TYPES.SET_CLIENTS, clients);
// ------------------------------------------------------------------------------

export const createFetchClients = () =>
  createAction(CLIENT_ACTION_TYPES.FETCH_CLIENTS);
// ------------------------------------------------------------------------------

export const createUpdateClient = (client) =>
  createAction(CLIENT_ACTION_TYPES.UPDATE_CURRENT_CLIENT, client);
// ------------------------------------------------------------------------------

export const createDeleteClient = (client) =>
  createAction(CLIENT_ACTION_TYPES.DELETE_CURRENT_CLIENT, client);
// ------------------------------------------------------------------------------

export const createLoading = (bool) =>
  createAction(CLIENT_ACTION_TYPES.SET_LOADING, bool);
// ------------------------------------------------------------------------------

export const createError = (error) =>
  createAction(CLIENT_ACTION_TYPES.SET_LOADING, error);
// ------------------------------------------------------------------------------
