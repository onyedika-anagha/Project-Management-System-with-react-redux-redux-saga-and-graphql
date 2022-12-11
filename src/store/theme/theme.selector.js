import { createSelector } from "reselect";

const selectThemeReducer = (state) => state.theme;

export const selectTheme = createSelector(
  [selectThemeReducer],
  (theme) => theme.mode
);
