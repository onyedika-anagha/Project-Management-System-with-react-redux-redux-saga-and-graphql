import { createAction } from "../../utils/reducer/reducer.utils";
import { PROJECT_ACTION_TYPES } from "./project.types";

// ------------------------------------------------------------------------------

export const setCurrentProject = (project) =>
  createAction(PROJECT_ACTION_TYPES.SET_CURRENT_PROJECT, project);
// ------------------------------------------------------------------------------

export const setProjects = (projects) =>
  createAction(PROJECT_ACTION_TYPES.SET_PROJECTS, projects);
// ------------------------------------------------------------------------------
