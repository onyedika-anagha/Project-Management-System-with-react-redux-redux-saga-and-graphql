import { all, takeLatest, put, call } from "redux-saga/effects";
import { AUTH_TOKEN } from "../../utils/helper/constants";

import { alertMessage } from "../../utils/initial-state/initial-state";
import jwtDecode from "jwt-decode";

import { signUpFailed, signOutFailed, signOutSuccess } from "./user.actions";
import { userActions } from "./user.slice";

import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = ({ payload }) =>
  userActions.setCurrentUser(payload);

export const setIsLoggedIn = (boolean) => userActions.setIsLoggedIn(boolean);

export const setIsLoading = (boolean) => userActions.setIsLoading(boolean);
export const setUserId = (id) => userActions.setUserId(id);

export function* getSnapshotFromUserAuth(
  userAuth
  //additionalInformation
) {
  try {
    // const user = yield call(getUsers, userAuth);
    // if (user.userType !== "none") {
    //   // console.log("user from saga: ", user);
    //   yield put(fetchUserStore(userAuth.uid, user.userType));
    //   yield put(setCurrentUser(user));
    //   yield put(setIsLoggedIn(true));
    //   yield put(setIsLoading(false));
    // } else {
    //   alertMessage("error", "user is not an admin");
    // }
  } catch (error) {
    yield put(userActions.setError(error));
  }
}
export function* signInUser({ payload }) {
  try {
    yield put(setCurrentUser({ payload }));
    yield put(userActions.setUserId(payload.id));
    yield put(setIsLoggedIn(true));
    yield put(setIsLoading(false));
    alertMessage("success", "Login successful");
  } catch (error) {
    yield put(userActions.setError(error));
  }
}

export function* signInWithGoogle() {
  try {
    yield put(setIsLoading(true));
    // const { user } = yield call(signInWithGooglePopup);
    // yield call(getSnapshotFromUserAuth, user);
    yield put(setIsLoading(false));
  } catch (error) {
    yield put(userActions.setError(error));
    yield put(setIsLoading(false));
  }
}
export function* signInWithEmailAndPassord({ payload: { email, password } }) {
  try {
    yield put(setIsLoading(true));
    // const userCredential = yield call(
    //   signInAuthUserWithEmailAndPassword,
    //   email,
    //   password
    // );
    // if (userCredential) {
    //   const { user } = userCredential;
    //   yield call(getSnapshotFromUserAuth, user);
    // }
    yield put(setIsLoading(false));
  } catch (error) {
    yield put(userActions.setError(error));
    yield put(setIsLoading(false));
  }
}

export function* userSignUp({ payload: { email, password, displayName } }) {
  try {
    // const userCredential = yield call(
    //   createAuthUserWithEmailAndPassword,
    //   email,
    //   password
    // );
    // if (userCredential) {
    //   const { user } = userCredential;
    //   const userData = {
    //     ...user,
    //     displayName,
    //   };
    //   yield call(getSnapshotFromUserAuth, userData);
    //   yield put(signUpSuccess(userData));
    // }
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({ payload: user }) {
  try {
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(userActions.setError(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userToken = sessionStorage.getItem(AUTH_TOKEN);
    if (userToken != null && userToken) {
      const decodeToken = jwtDecode(userToken);
      console.log(decodeToken);
      yield put(setUserId(decodeToken.user_id));
      yield put(setIsLoggedIn(true));
      if (decodeToken.exp * 1000 < Date.now()) {
        sessionStorage.removeItem(AUTH_TOKEN);
        yield put(userActions.logout());
        yield put(setIsLoading(false));
      }
    } else {
      yield put(userActions.logout());
    }
    // const userAuth = yield call(getCurrentUser);
    // console.log(userAuth);
    // if (userAuth) {
    //   yield call(getSnapshotFromUserAuth, userAuth);
    // } else {
    //   yield put(userActions.logout());
    //   yield put(setIsLoading(false));
    //   return;
    // }
  } catch (error) {
    yield put(userActions.setError(error));
    yield put(setIsLoading(false));
  }
}

export function* signOut() {
  try {
    // yield call(signOutUser);
    yield put(signOutSuccess());

    yield put(userActions.logout());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassord
  );
}

export function* triggerLoading({ payload }) {
  yield put(userActions.setIsLoading(payload));
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_START, userSignUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onSignInSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS, signInUser);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSetIsLoading() {
  yield takeLatest(USER_ACTION_TYPES.SET_IS_LOADING, triggerLoading);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onSetIsLoading),
    call(onSignInSuccess),
  ]);
}
