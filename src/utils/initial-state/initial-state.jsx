import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme/theme-slice";

import { toast } from "react-toastify";

import { selectTheme } from "../../store/theme/theme.selector";
import { checkUserSession, signInSuccess } from "../../store/user/user.actions";
import {
  selectIsLoggedIn,
  selectUser,
  selectUserId,
} from "../../store/user/user.selector";
import { GET_USER } from "../../queries/user.queries";
import { useQuery } from "@apollo/client";

export const alertMessage = (type, msg) => {
  const theme =
    localStorage.theme !== null && localStorage.theme === "dark"
      ? "dark"
      : localStorage.theme !== null && localStorage.theme === "light"
      ? "light"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const toastC =
    type === "error"
      ? toast.error
      : type === "info"
      ? toast.info
      : type === "success"
      ? toast.success
      : type === "warn"
      ? toast.warn
      : toast;
  toastC(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
};

const FetchCurrentUser = ({ userId }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectUser);
  const { data } = useQuery(GET_USER, {
    variables: { id: userId },
  });
  useEffect(() => {
    if (isLoggedIn && currentUser == null) {
      if (userId != null && data != null) {
        if (data.user != null) dispatch(signInSuccess(data.user));
      }
    }
  }, [isLoggedIn, userId, currentUser, data, dispatch]);
};

const InitialState = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(themeActions.changeMode("dark"));
    }
    if (theme === "dark") {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [theme, dispatch]);
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  if (userId != null) return <FetchCurrentUser userId={userId} />;
};

export default InitialState;
