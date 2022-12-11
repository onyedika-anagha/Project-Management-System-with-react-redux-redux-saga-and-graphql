import { useDispatch, useSelector } from "react-redux";
import { setCurrentProject } from "../../store/project/project.actions";
import { selectProject } from "../../store/project/project.selector";
import Select from "react-select";
import { useEffect, useState } from "react";
import { PROJECT_TYPE_OPTIONS } from "../../utils/initial-state/states";
// import { GET_PROJECTS } from "../../queries/project.queries";
import { useMutation } from "@apollo/client";
import { alertMessage } from "../../utils/initial-state/initial-state";
import { UPDATE_PROJECT } from "../../mutations/project.mutation";

const defaultFormValues = {
  id: "",
  name: "",
  description: "",
  clientId: "",
  projectType: "",
};
const EditProject = () => {
  const [formData, setFormData] = useState(defaultFormValues);
  const project = useSelector(selectProject);
  const dispatch = useDispatch();
  const cancelEdit = () => {
      dispatch(setCurrentProject(null));
    },
    { name, description, projectType } = formData;

  useEffect(() => {
    if (project != null) setFormData(project);
  }, [project]);

  const selectedProjectType =
    projectType.length > 0
      ? PROJECT_TYPE_OPTIONS.filter((i) => i.value === projectType)[0]
      : null;
  console.log("selectedProjectType: ", selectedProjectType);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [updateProject, { loading, data }] = useMutation(UPDATE_PROJECT, {
      variables: formData,
    }),
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateProject();
        setFormData(data);
        alertMessage("success", "Project Updated Successfully.");
      } catch (error) {
        console.log("error: ", error.message);
        alertMessage(
          "error",
          "Something went wrong, please check your credentials or try again."
        );
      }
    };
  console.log(formData);

  if (project == null) {
    return <></>;
  }

  return (
    <div
      className="modal fade"
      id="editproject"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="editprojectLabel">
              {" "}
              Edit Project
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={cancelEdit}
            />
          </div>
          {project == null ? (
            <center>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </center>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput77"
                    className="form-label"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput77"
                    placeholder="Explain what the Project Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Project Category</label>
                  <Select
                    options={PROJECT_TYPE_OPTIONS}
                    name="projectType"
                    defaultValue={selectedProjectType}
                    onChange={({ value }) => {
                      setFormData({ ...formData, projectType: value });
                    }}
                    value={projectType.length > 0 ? selectedProjectType : null}
                    isClearable={true}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea78"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea78"
                    rows={3}
                    placeholder="Add any extra details about the request"
                    value={description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                {loading != null ? (
                  <button type="button" className="btn btn-default">
                    <div
                      className="spinner-border text-light"
                      role="status"
                      style={{ width: 20, height: 20 }}
                    >
                      <span className="sr-only"></span>
                    </div>
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProject;
