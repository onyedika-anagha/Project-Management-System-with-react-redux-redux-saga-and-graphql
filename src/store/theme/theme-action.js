import { createAction } from "../../utils/reducer/reducer.utils";
import { THEME_ACTION_TYPES } from "./theme.types";

export const setTheme = (prop) => {
  localStorage.theme = prop;
  return createAction(THEME_ACTION_TYPES.SET_THEME, prop);
};
