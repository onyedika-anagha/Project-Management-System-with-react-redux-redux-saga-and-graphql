import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";
import { makeid } from "../../utils/helper/helper";
import profile_av from "../../assets/images/profile_av.png";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {/* Body: Body */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card border-0 mb-4 no-bg">
                <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                  <h3 className=" fw-bold flex-fill mb-0">User Profile</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card teacher-card  mb-3">
                <div className="card-body d-flex teacher-fulldeatil">
                  <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <a href="#!">
                      <img
                        src={profile_av}
                        alt="profile_image"
                        className="avatar xl rounded-circle img-thumbnail shadow-sm"
                      />
                    </a>
                    <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                      <h6 className="mb-0 fw-bold d-block fs-6">ADMIN</h6>
                      <span className="text-muted small">
                        USER ID : PXL-{makeid().toLocaleUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 ps-4 w-100">
                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                      {user.fullName}
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      {user.name}
                    </span>
                    {/* <p className="mt-2 small">
                      The purpose of lorem ipsum is to create a natural looking
                      block of text (sentence, paragraph, page, etc.) that
                      doesn't distract from the layout. A practice not without
                      controversy
                    </p> */}
                    <div className="row g-2 pt-2">
                      {/* <div className="col-xl-5">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-touch-phone" />
                          <span className="ms-2 small">202-555-0174 </span>
                        </div>
                      </div> */}
                      <div className="col-xl-5">
                        <div className="d-flex align-items-center">
                          <i className="icofont-email" />
                          <span className="ms-2 small">{user.email}</span>
                        </div>
                      </div>
                      {/* <div className="col-xl-5">
                        <div className="d-flex align-items-center">
                          <i className="icofont-birthday-cake" />
                          <span className="ms-2 small">19/03/1980</span>
                        </div>
                      </div> */}
                      <div className="col-xl-5">
                        <div className="d-flex align-items-center">
                          <i className="icofont-address-book" />
                          <span className="ms-2 small">Project Assistant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row End */}
            </div>
          </div>
          {/* Row End */}
        </div>
      </div>
    </>
  );
};

export default Profile;
