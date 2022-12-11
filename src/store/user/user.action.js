import { userActions } from "./user.slice";

export const setCurrentUser = (user) => userActions.setCurrentUser(user);

export const setIsLoggedIn = (boolean) => userActions.setIsLoggedIn(boolean);

export const setIsLoading = (boolean) => userActions.setIsLoading(boolean);

export const _login = (user) => {
  return async (dispatch) => {
    dispatch(setCurrentUser(user));
    dispatch(setIsLoggedIn(true));
    dispatch(setIsLoading(false));
  };
};

export const _logout = () => {
  return async (dispatch) => {
    dispatch(userActions.logout());
  };
};
