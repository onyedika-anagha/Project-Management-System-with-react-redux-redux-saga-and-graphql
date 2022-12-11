// themeActions.changeMode(prop)
import { all, takeLatest, put, call } from "redux-saga/effects";
import { themeActions } from "./theme-slice";
import { THEME_ACTION_TYPES } from "./theme.types";

export function* setUserMode({ payload }) {
  // console.log(type);
  yield put(themeActions.changeMode(payload));
}

export function* onSetTheme() {
  yield takeLatest(THEME_ACTION_TYPES.SET_THEME, setUserMode);
}

export function* themeSagas() {
  yield all([call(onSetTheme)]);
}
