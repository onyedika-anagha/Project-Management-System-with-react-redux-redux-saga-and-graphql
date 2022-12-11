import { useDispatch, useSelector } from "react-redux";
import { selectSideBarQuery } from "../../store/sidebar/sidebar.selector";
import { sidebarActions } from "../../store/sidebar/sidebar.slice";
import profile_av from "../../assets/images/profile_av.png";
import { selectUser } from "../../store/user/user.selector";
import { Link } from "react-router-dom";
import { AUTH_TOKEN } from "../../utils/helper/constants";
import { signOutStart } from "../../store/user/user.actions";

function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSideBarQuery);
  const user = useSelector(selectUser);
  const toggleSideBar = () => dispatch(sidebarActions.setIsOpen(!isOpen));

  const logOut = () => {
    sessionStorage.removeItem(AUTH_TOKEN);
    dispatch(signOutStart());
  };
  if (user != null && user)
    return (
      <>
        {/* Body: Header */}
        <div className="header">
          <nav className="navbar py-4">
            <div className="container-xxl">
              {/* header rightbar icon */}
              <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                <div className="d-flex">
                  <a
                    className="nav-link text-primary collapsed"
                    href="help.html"
                    title="Get Help"
                  >
                    <i className="icofont-info-square fs-5" />
                  </a>
                  {/* <div className="avatar-list avatar-list-stacked px-3">
                    <span
                      className="avatar rounded-circle text-center pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#addUser"
                    >
                      <i className="icofont-ui-add" />
                    </span>
                  </div> */}
                </div>
                {/* <div className="dropdown notifications zindex-popover">
                  <a
                    className="nav-link dropdown-toggle pulse"
                    href="#!"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icofont-alarm fs-5" />
                    <span className="pulse-ring" />
                  </a>
                  <div
                    id="NotificationsDiv"
                    className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
                  >
                    <div className="card border-0 w380">
                      <div className="card-header border-0 p-3">
                        <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                          <span>Notifications</span>
                          <span className="badge text-white">11</span>
                        </h5>
                      </div>
                      <div className="tab-content card-body">
                        <div className="tab-pane fade show active">
                          <ul className="list-unstyled list mb-0">
                            <li className="py-2 mb-1 border-bottom">
                              <a href="#!" className="d-flex">
                                <img
                                  className="avatar rounded-circle"
                                  src="assets/images/xs/avatar1.jpg"
                                  alt=""
                                />
                                <div className="flex-fill ms-2">
                                  <p className="d-flex justify-content-between mb-0 ">
                                    <span className="font-weight-bold">
                                      Dylan Hunter
                                    </span>{" "}
                                    <small>2MIN</small>
                                  </p>
                                  <span className="">
                                    Added 2021-02-19 my-Task ui/ux Design{" "}
                                    <span className="badge bg-success">
                                      Review
                                    </span>
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <a href="#!" className="d-flex">
                                <div className="avatar rounded-circle no-thumbnail">
                                  DF
                                </div>
                                <div className="flex-fill ms-2">
                                  <p className="d-flex justify-content-between mb-0 ">
                                    <span className="font-weight-bold">
                                      Diane Fisher
                                    </span>{" "}
                                    <small>13MIN</small>
                                  </p>
                                  <span className="">
                                    Task added Get Started with Fast Cad project
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <a href="#!" className="d-flex">
                                <img
                                  className="avatar rounded-circle"
                                  src="assets/images/xs/avatar3.jpg"
                                  alt=""
                                />
                                <div className="flex-fill ms-2">
                                  <p className="d-flex justify-content-between mb-0 ">
                                    <span className="font-weight-bold">
                                      Andrea Gill
                                    </span>{" "}
                                    <small>1HR</small>
                                  </p>
                                  <span className="">
                                    Quality Assurance Task Completed
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <a href="#!" className="d-flex">
                                <img
                                  className="avatar rounded-circle"
                                  src="assets/images/xs/avatar5.jpg"
                                  alt=""
                                />
                                <div className="flex-fill ms-2">
                                  <p className="d-flex justify-content-between mb-0 ">
                                    <span className="font-weight-bold">
                                      Diane Fisher
                                    </span>{" "}
                                    <small>13MIN</small>
                                  </p>
                                  <span className="">
                                    Add New Project for App Developemnt
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <a href="#!" className="d-flex">
                                <img
                                  className="avatar rounded-circle"
                                  src="assets/images/xs/avatar6.jpg"
                                  alt=""
                                />
                                <div className="flex-fill ms-2">
                                  <p className="d-flex justify-content-between mb-0 ">
                                    <span className="font-weight-bold">
                                      Andrea Gill
                                    </span>{" "}
                                    <small>1HR</small>
                                  </p>
                                  <span className="">
                                    Add Timesheet For Rhinestone project
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="py-2">
                              <a href="#!" className="d-flex">
                                <img
                                  className="avatar rounded-circle"
                                  src="assets/images/xs/avatar7.jpg"
                                  alt=""
                                />
                                <div className="flex-fill ms-2">
                                  <p className="d-flex justify-content-between mb-0 ">
                                    <span className="font-weight-bold">
                                      Zoe Wright
                                    </span>{" "}
                                    <small className="">1DAY</small>
                                  </p>
                                  <span className="">Add Calander Event</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a
                        className="card-footer text-center border-top-0"
                        href="#!"
                      >
                        {" "}
                        View all notifications
                      </a>
                    </div>
                  </div>
                </div> */}
                <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                  <div className="u-info me-2">
                    <p className="mb-0 text-end line-height-sm ">
                      <span className="font-weight-bold">{user.fullName}</span>
                    </p>
                    <small>User Profile</small>
                  </div>
                  <a
                    className="nav-link dropdown-toggle pulse p-0"
                    href="#!"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                  >
                    <img
                      className="avatar lg rounded-circle img-thumbnail"
                      src={profile_av}
                      alt="profile"
                    />
                  </a>
                  <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                    <div className="card border-0 w280">
                      <div className="card-body pb-0">
                        <div className="d-flex py-1">
                          <img
                            className="avatar rounded-circle"
                            src={profile_av}
                            alt="profile"
                          />
                          <div className="flex-fill ms-3">
                            <p className="mb-0">
                              <span className="font-weight-bold">
                                {user.fullName}
                              </span>
                            </p>
                            <small className="">{user.email}</small>
                          </div>
                        </div>
                        <div>
                          <hr className="dropdown-divider border-dark" />
                        </div>
                      </div>
                      <div className="list-group m-2 ">
                        <Link
                          to="/dashboard/task"
                          className="list-group-item list-group-item-action border-0 "
                        >
                          <i className="icofont-tasks fs-5 me-3" />
                          My Task
                        </Link>
                        <Link
                          to="/dashboard/profile"
                          className="list-group-item list-group-item-action border-0 "
                        >
                          <i className="icofont-ui-user-group fs-6 me-3" />
                          Profile
                        </Link>
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action border-0 "
                          onClick={logOut}
                        >
                          <i className="icofont-logout fs-6 me-3" />
                          Signout
                        </a>
                        {/* <div>
                          <hr className="dropdown-divider border-dark" />
                        </div>
                        <a
                          href="ui-elements/auth-signup.html"
                          className="list-group-item list-group-item-action border-0 "
                        >
                          <i className="icofont-contact-add fs-5 me-3" />
                          Add personal account
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* menu toggler */}
              <button
                className="navbar-toggler p-0 border-0 menu-toggle order-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainHeader"
                onClick={toggleSideBar}
              >
                <span className="fa fa-bars" />
              </button>
              {/* main menu Search*/}
              <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                <div className="input-group flex-nowrap input-group-lg">
                  <button
                    type="button"
                    className="input-group-text"
                    id="addon-wrapping"
                  >
                    <i className="fa fa-search" />
                  </button>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    aria-label="search"
                    aria-describedby="addon-wrapping"
                  />
                  <button
                    type="button"
                    className="input-group-text add-member-top"
                    id="addon-wrappingone"
                    data-bs-toggle="modal"
                    data-bs-target="#addUser"
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
}

export default Header;
