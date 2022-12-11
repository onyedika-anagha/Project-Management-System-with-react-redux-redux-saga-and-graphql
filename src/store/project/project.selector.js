import { createSelector } from "reselect";
import { getProjectTypes } from "../../utils/initial-state/states";
const selectProjectReducer = (state) => state.project;

export const selectAllProjects = createSelector(
  [selectProjectReducer],
  (project) =>
    project.projects != null
      ? project.projects.map((i) => {
          const pType = getProjectTypes(i.projectType);
          return {
            ...i,
            projectType: pType,
          };
        })
      : project.projects
);
export const selectProject = createSelector(
  [selectProjectReducer],
  (project) => project.currentProject
);
