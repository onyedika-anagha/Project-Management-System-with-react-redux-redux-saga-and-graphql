import { createSelector } from "reselect";
const selectSideBarReducer = (state) => state.sidebar;

export const selectSideBarQuery = createSelector(
  [selectSideBarReducer],
  (sidebar) => sidebar.isOpen
);
