import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CLIENT } from "../../mutations/client.mutations";
import { createSetCurrentClient } from "../../store/client/client.actions";
import { selectClient } from "../../store/client/client.selector";
import { alertMessage } from "../../utils/initial-state/initial-state";

const defaultFormValues = {
  name: "",
  email: "",
  phone: "",
};
const EditClient = () => {
  const [formData, setFormData] = useState(defaultFormValues);
  const { name, email, phone } = formData;

  const client = useSelector(selectClient);
  const dispatch = useDispatch();
  const cancelEdit = () => {
    dispatch(createSetCurrentClient(null));
  };
  useEffect(() => {
    if (client != null) setFormData(client);
  }, [client]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [updateClient, { loading, data }] = useMutation(UPDATE_CLIENT, {
      variables: formData,
    }),
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await updateClient();
        alertMessage("success", "Client Updated Successfully.");
      } catch (error) {
        console.log("error: ", error.message);
        alertMessage(
          "error",
          "Something went wrong, please check your credentials or try again."
        );
      }
    };
  useEffect(() => {
    if (data != null) setFormData(data.updateClient);
    console.log("client: ", data);
  }, [data]);

  return (
    <div
      className="modal fade"
      id="editproject"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="createprojectlLabelone">
              {" "}
              Edit Client
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {client == null ? (
            <center>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </center>
          ) : (
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col">
                    <label
                      htmlFor="exampleFormControlInput177"
                      className="form-label"
                    >
                      Client Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput177"
                      placeholder="Client Name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col">
                    <label
                      htmlFor="exampleFormControlInput477"
                      className="form-label"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput477"
                      placeholder="Client Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label
                      htmlFor="exampleFormControlInput777"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput777"
                      placeholder="Phone Number"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <center>
                  {loading ? (
                    <button type="button" className="btn btn-default">
                      <div
                        class="spinner-border text-light"
                        role="status"
                        style={{ width: 20, height: 20 }}
                      >
                        <span class="sr-only"></span>
                      </div>
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary">
                      Create
                    </button>
                  )}
                </center>
              </form>
            </div>
          )}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClient;
