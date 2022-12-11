import { sidebarActions } from "./sidebar.slice";

export const setSideBarIsOpen = async (boolean) => (dispatch) => {
  dispatch(sidebarActions.setIsOpen(boolean));
};
