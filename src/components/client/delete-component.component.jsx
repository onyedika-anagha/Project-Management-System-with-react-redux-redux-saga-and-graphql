import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CLIENT } from "../../mutations/client.mutations";
import { GET_USER_CLIENTS } from "../../queries/client.queries";
import { GET_USER_PROJECTS } from "../../queries/project.queries";
import { createSetCurrentClient } from "../../store/client/client.actions";
import { selectClient } from "../../store/client/client.selector";
import { selectUserId } from "../../store/user/user.selector";
import { alertMessage } from "../../utils/initial-state/initial-state";

const DeleteClient = () => {
  const cancelButton = useRef();
  const client = useSelector(selectClient);
  const dispatch = useDispatch();
  const cancelDelete = () => {
      dispatch(createSetCurrentClient(null));
    },
    clientId = client == null ? null : client.id;
  const handleClickOnCancelButton = () => {
    if (cancelButton) {
      cancelButton.current.click();
    }
  };
  const userId = useSelector(selectUserId);
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: clientId },
    refetchQueries: [
      {
        query: GET_USER_CLIENTS,
        variables: { id: userId },
      },
      {
        query: GET_USER_PROJECTS,
        variables: { id: userId },
      },
    ],
    onCompleted: () => {
      handleClickOnCancelButton();
      alertMessage("error", "Client Deleted Successfully");
    },
  });

  return (
    <div
      className="modal fade"
      id="deleteproject"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        {client == null ? (
          <center>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </center>
        ) : (
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="deleteprojectLabel">
                {" "}
                Delete item Permanently?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body justify-content-center flex-column d-flex">
              <i className="icofont-ui-delete text-danger display-2 text-center mt-2" />
              <p className="mt-4 fs-5 text-center">
                You can only delete this item Permanently
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={cancelDelete}
                ref={cancelButton}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger color-fff"
                onClick={deleteClient}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteClient;
