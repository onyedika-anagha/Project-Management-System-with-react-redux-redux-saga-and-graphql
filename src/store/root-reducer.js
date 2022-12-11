import { combineReducers } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebar/sidebar.slice";

import themeSlice from "./theme/theme-slice";
import userSlice from "./user/user.slice";
import projectSlice from "./project/project.slice";
import clientSlice from "./client/client.slice";

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  sidebar: sidebarSlice.reducer,
  user: userSlice.reducer,
  project: projectSlice.reducer,
  client: clientSlice.reducer,
});
