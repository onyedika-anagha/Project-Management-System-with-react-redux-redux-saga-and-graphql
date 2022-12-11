import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { ADD_PROJECT } from "../../mutations/project.mutation";
import { GET_USER_PROJECTS } from "../../queries/project.queries";
import { selectAllClients } from "../../store/client/client.selector";
import { selectUserId } from "../../store/user/user.selector";
import { alertMessage } from "../../utils/initial-state/initial-state";
import { PROJECT_TYPE_OPTIONS } from "../../utils/initial-state/states";

const defaultFormValues = {
  name: "",
  description: "",
  clientId: "",
  projectType: "",
};

const AddProject = () => {
  const [formData, setFormData] = useState(defaultFormValues),
    [loading, setLoading] = useState(false),
    { name, description, clientId, projectType } = formData;
  const clients = useSelector(selectAllClients);
  const userId = useSelector(selectUserId);

  const clientOptions =
    clients == null
      ? clients
      : clients.map((client) => {
          return { value: client.id, label: client.name };
        });
  const selectedProjectType =
    projectType.length > 0
      ? PROJECT_TYPE_OPTIONS.filter((i) => i.value === projectType)[0]
      : null;
  const selectedClientOption =
    clientOptions == null
      ? null
      : clientId.length > 0
      ? clientOptions.filter((i) => i.id === clientId)[0]
      : null;
  console.log("selectedProjectType: ", selectedProjectType);
  const resetForm = () => {
      setFormData(defaultFormValues);
    },
    handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  const [addProject] = useMutation(ADD_PROJECT, {
      variables: { ...formData, userId },
      update(cache, { data: { addProject } }) {
        const { projects } = cache.readQuery({
          query: GET_USER_PROJECTS,
          variables: { id: userId },
        });

        // dispatch(setProjects(newData));
        cache.writeQuery({
          query: GET_USER_PROJECTS,
          data: {
            projects: [...projects, addProject],
          },
          variables: { id: userId },
        });
      },
    }),
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addProject();
        resetForm();
        alertMessage("success", "Project Added Successfully.");
        setLoading(false);
      } catch (error) {
        console.log("error: ", error.message);
        alertMessage(
          "error",
          "Something went wrong, please check your credentials or try again."
        );
      }
    };
  console.log(formData);

  return (
    <>
      {/* Create Project*/}
      <div
        className="modal fade"
        id="createproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                {" "}
                Create Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
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
                <div className="deadline-form">
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label className="form-label">Client</label>

                      <Select
                        options={clientOptions}
                        name="clientId"
                        defaultValue={selectedClientOption}
                        value={
                          clientId.length > 0 ? selectedClientOption : null
                        }
                        onChange={({ value }) => {
                          setFormData({ ...formData, clientId: value });
                        }}
                        isClearable={true}
                      />
                    </div>
                  </div>
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
                {loading ? (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
