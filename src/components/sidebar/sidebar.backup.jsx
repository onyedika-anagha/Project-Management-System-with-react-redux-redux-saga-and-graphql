import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { selectSideBarQuery } from "../../store/sidebar/sidebar.selector";
import { sidebarActions } from "../../store/sidebar/sidebar.slice";
import { themeActions } from "../../store/theme/theme-slice";
import { selectTheme } from "../../store/theme/theme.selector";

const Sidebar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isOpen = useSelector(selectSideBarQuery);
  const toggleSideBar = () => dispatch(sidebarActions.setIsOpen(!isOpen));
  const toggleTheme = () => {
    if (theme === "dark") {
      dispatch(themeActions.changeMode("light"));
      localStorage.setItem("theme", "light");
    } else {
      dispatch(themeActions.changeMode("dark"));
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <>
      {/* sidebar */}
      <div className={`sidebar px-4 py-4 py-md-5 me-0 ${isOpen ? "open" : ""}`}>
        <div className="d-flex flex-column h-100">
          <a href="index.html" className="mb-0 brand-icon">
            <span className="logo-icon">
              <svg
                width={35}
                height={35}
                fill="currentColor"
                className="bi bi-clipboard-check"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </span>
            <span className="logo-text">My-Task</span>
          </a>
          {/* Menu: main ul */}
          <ul className="menu-list flex-grow-1 mt-3">
            <li className="collapsed">
              <NavLink
                to="/dashboard"
                className={(navData) =>
                  navData.isActive && window.location.pathname === "/dashboard"
                    ? "m-link active"
                    : "m-link"
                }
              >
                <i className="icofont-home fs-5" /> <span>Dashboard</span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className={(navData) =>
                  navData.isActive ? "m-link active" : "m-link"
                }
              >
                <i className="icofont-user" />
                <span className="nk-menu-text">Profile</span>
              </NavLink>
            </li>
            <li className="collapsed">
              <a
                className={
                  window.location.pathname === "/dashboard/projects"
                    ? "m-link active"
                    : "m-link"
                }
                data-bs-toggle="collapse"
                data-bs-target="#project-Components"
                href="#!"
              >
                <i className="icofont-briefcase" />
                <span>Projects</span>{" "}
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              {/* Menu: Sub menu ul */}
              <ul className="sub-menu collapse" id="project-Components">
                <li>
                  <Link
                    className={
                      window.location.pathname === "/dashboard/projects"
                        ? "m-link active"
                        : "m-link"
                    }
                    to="/dashboard/projects"
                  >
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      window.location.pathname === "/dashboard/task"
                        ? "m-link active"
                        : "m-link"
                    }
                    to="/dashboard/task"
                  >
                    <span>Tasks</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      window.location.pathname === "/dashboard/timesheet"
                        ? "m-link active"
                        : "m-link"
                    }
                    to="/dashboard/timesheet"
                  >
                    <span>Timesheet</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "m-link active" : "m-link"
                }
                to="/dashboard/clients"
              >
                <i className="icofont-user-male" /> <span>Clients</span>{" "}
              </NavLink>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#emp-Components"
                href="#!"
              >
                <i className="icofont-users-alt-5" /> <span>Employees</span>{" "}
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              {/* Menu: Sub menu ul */}
              <ul className="sub-menu collapse" id="emp-Components">
                <li>
                  <a className="ms-link" href="members.html">
                    {" "}
                    <span>Members</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="employee-profile.html">
                    {" "}
                    <span>Members Profile</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="holidays.html">
                    {" "}
                    <span>Holidays</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="attendance-employees.html">
                    {" "}
                    <span>Attendance Employees</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="attendance.html">
                    {" "}
                    <span>Attendance</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="leave-request.html">
                    {" "}
                    <span>Leave Request</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="department.html">
                    {" "}
                    <span>Department</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="loan.html">
                    {" "}
                    <span>Loan</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-Componentsone"
                href="#!"
              >
                <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              {/* Menu: Sub menu ul */}
              <ul className="sub-menu collapse" id="menu-Componentsone">
                <li>
                  <a className="ms-link" href="invoices.html">
                    <span>Invoices</span>{" "}
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="payments.html">
                    <span>Payments</span>{" "}
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="expenses.html">
                    <span>Expenses</span>{" "}
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="create-invoice.html">
                    <span>Create Invoice</span>{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#payroll-Components"
                href="#!"
              >
                <i className="icofont-users-alt-5" /> <span>Payroll</span>{" "}
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              {/* Menu: Sub menu ul */}
              <ul className="sub-menu collapse" id="payroll-Components">
                <li>
                  <a className="ms-link" href="salaryslip.html">
                    <span>Employee Salary</span>{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#app-Components"
                href="#!"
              >
                <i className="icofont-contrast" /> <span>App</span>{" "}
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              {/* Menu: Sub menu ul */}
              <ul className="sub-menu collapse" id="app-Components">
                <li>
                  <a className="ms-link" href="calendar.html">
                    {" "}
                    <span>Calander</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="chat.html">
                    <span>Chat App</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#extra-Components"
                href="#!"
              >
                <i className="icofont-code-alt" /> <span>Other Pages</span>{" "}
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              {/* Menu: Sub menu ul */}
              <ul className="sub-menu collapse" id="extra-Components">
                <li>
                  <a className="ms-link" href="charts.html">
                    {" "}
                    <span>Apex Charts</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="forms.html">
                    <span>Forms Example</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="table.html">
                    {" "}
                    <span>Table Example</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="review.html">
                    <span>Reviews Page</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="icon.html">
                    <span>Icons</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="contact.html">
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="widgets.html">
                    <span>Widgets</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="todo-list.html">
                    <span>Todo-List</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="m-link" href="ui-elements/ui-alerts.html">
                <i className="icofont-paint" /> <span>UI Components</span>
              </a>
            </li>
          </ul>
          {/* Theme: Switch Theme */}
          <ul className="list-unstyled mb-0">
            <li className="d-flex align-items-center justify-content-center">
              <div className="form-check form-switch theme-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="theme-switch"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <label className="form-check-label" htmlFor="theme-switch">
                  Enable Dark Mode!
                </label>
              </div>
            </li>
          </ul>
          {/* Menu: menu collepce btn */}
          <button
            type="button"
            className="btn btn-link sidebar-mini-btn text-light"
            onClick={toggleSideBar}
          >
            <span className="ms-2">
              <i className="icofont-bubble-right" />
            </span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="sidebar-overlay"
          style={{
            background: "rgba(0,0,0,0.25)",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            position: "absolute",
            zIndex: 99991,
            backdropFilter: "blur(4px)",
          }}
          onClick={toggleSideBar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
