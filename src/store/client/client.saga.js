// themeActions.changeMode(prop)
import { all, takeLatest, put, call } from "redux-saga/effects";
import { setClients, setCurrentClient } from "./client.slice";
import { CLIENT_ACTION_TYPES } from "./client.types";

export function* setAllClients({ payload }) {
  yield put(setClients(payload));
}
export function* setClient({ payload }) {
  yield put(setCurrentClient(payload));
}

export function* fetchClients() {
  yield console.log("fetching clients");
}

export function* onSetClients() {
  yield takeLatest(CLIENT_ACTION_TYPES.SET_CLIENTS, setAllClients);
}
export function* onSetCurClient() {
  yield takeLatest(CLIENT_ACTION_TYPES.SET_CURRENT_CLIENT, setClient);
}
export function* onFetchClients() {
  yield takeLatest(CLIENT_ACTION_TYPES.FETCH_CLIENTS, fetchClients);
}

export function* clientSagas() {
  yield all([call(onSetClients), call(onSetCurClient), call(onFetchClients)]);
}
