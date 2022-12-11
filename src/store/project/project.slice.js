import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: null,
    currentProject: null,
  },
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
    setCurrentProject(state, action) {
      state.currentProject = action.payload;
    },
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice;
