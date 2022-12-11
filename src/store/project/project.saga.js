// themeActions.changeMode(prop)
import { all, takeLatest, put, call } from "redux-saga/effects";
import { projectActions } from "./project.slice";
import { PROJECT_ACTION_TYPES } from "./project.types";

export function* setAllProjects({ payload }) {
  yield put(projectActions.setProjects(payload));
}
export function* setProject({ payload }) {
  yield put(projectActions.setCurrentProject(payload));
}

export function* onSetProjects() {
  yield takeLatest(PROJECT_ACTION_TYPES.SET_PROJECTS, setAllProjects);
}
export function* onSetCurProject() {
  yield takeLatest(PROJECT_ACTION_TYPES.SET_CURRENT_PROJECT, setProject);
}

export function* projectSagas() {
  yield all([call(onSetProjects), call(onSetCurProject)]);
}
