import { useDispatch } from "react-redux";
import { createSetCurrentClient } from "../../store/client/client.actions";
import avatar from "../../assets/images/lg/avatar3.jpg";

const ClientItem = ({ client }) => {
  const dispatch = useDispatch();
  const handleCurrentClient = () => {
    dispatch(createSetCurrentClient(client));
  };
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card teacher-card">
        <div className="card-body  d-flex">
          <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
            <img
              src={avatar}
              alt="avatar"
              className="avatar xl rounded-circle img-thumbnail shadow-sm"
            />
            <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
              <h6 className="mb-0 fw-bold d-block fs-6 mt-2">CLIENT</h6>
              <div
                className="btn-group mt-2"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#editproject"
                  onClick={handleCurrentClient}
                >
                  <i className="icofont-edit text-success" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteproject"
                  onClick={handleCurrentClient}
                >
                  <i className="icofont-ui-delete text-danger" />
                </button>
              </div>
            </div>
          </div>
          <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
            <h6 className="mb-0 mt-2  fw-bold d-block fs-6">{client.name}</h6>
            <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
              {client.email}
            </span>
            <div className="video-setting-icon mt-3 pt-3 border-top"></div>
            <div className="d-flex flex-wrap align-items-center ct-btn-set">
              <a href="chat.html" className="btn btn-dark btn-sm mt-1 me-1">
                <i className="icofont-ui-text-chat me-2 fs-6" />
                Chat
              </a>
              <a href="profile.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientItem;
