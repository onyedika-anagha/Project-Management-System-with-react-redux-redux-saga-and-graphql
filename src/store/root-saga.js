import { call, all } from "redux-saga/effects";
import { clientSagas } from "./client/client.saga";
import { projectSagas } from "./project/project.saga";
import { themeSagas } from "./theme/theme.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([
    call(userSagas),
    call(themeSagas),
    call(projectSagas),
    call(clientSagas),
  ]);
}
