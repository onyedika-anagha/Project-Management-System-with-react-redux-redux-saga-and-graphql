import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ADD_CLIENT } from "../../mutations/client.mutations";
import { GET_USER_CLIENTS } from "../../queries/client.queries";
import { selectUserId } from "../../store/user/user.selector";
import { alertMessage } from "../../utils/initial-state/initial-state";
const defaultFormValues = {
  name: "",
  email: "",
  phone: "",
};
const AddClient = () => {
  const [formData, setFormData] = useState(defaultFormValues),
    [loading, setLoading] = useState(false);
  const { name, email, phone } = formData;
  const userId = useSelector(selectUserId);
  const resetForm = () => {
      setFormData(defaultFormValues);
    },
    handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [addClient] = useMutation(ADD_CLIENT, {
      variables: { ...formData, userId },
      update(cache, { data: { addClient } }) {
        const { clients } = cache.readQuery({
          query: GET_USER_CLIENTS,
          variables: { id: userId },
        });
        cache.writeQuery({
          query: GET_USER_CLIENTS,
          data: {
            clients: [...clients, addClient],
          },
          variables: { id: userId },
        });
      },
    }),
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        await addClient();
        resetForm();
        alertMessage("success", "Client Added Successfully.");
        setLoading(false);
      } catch (error) {
        console.log("error: ", error.message);
        alertMessage(
          "error",
          "Something went wrong, please check your credentials or try again."
        );
        setLoading(false);
      }
    };
  return (
    <>
      {/* Create Client*/}
      <div
        className="modal fade"
        id="createproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                {" "}
                Add Client
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="deadline-form">
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
              {/* <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea78"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea78"
                  rows={3}
                  placeholder="Add any extra details about the request"
                  defaultValue={""}
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
