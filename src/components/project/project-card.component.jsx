import { useDispatch } from "react-redux";
import { PROJECT_STATUS_TYPES } from "../../utils/initial-state/states";
import { setCurrentProject } from "../../store/project/project.actions";
import avatar8 from "../../assets/images/xs/avatar8.jpg";

const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();
  const handleCurrentProject = () => {
    dispatch(setCurrentProject(project));
  };
  switch (project.status) {
    case PROJECT_STATUS_TYPES.new:
      return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="lesson_name">
                  <div className="project-block light-info-bg">
                    <i className={project.projectType.classIcon} />
                  </div>
                  <span className="small text-muted project_name fw-bold">
                    {project.name}
                  </span>
                  <h6 className="mb-0 fw-bold  fs-6  mb-2">
                    {project.projectType.name}
                  </h6>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#editproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-edit text-success" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-ui-delete text-danger" />
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar-list avatar-list-stacked pt-2">
                  <img
                    className="avatar rounded-circle sm"
                    src={avatar8}
                    alt=""
                  />
                  <span
                    className="avatar rounded-circle text-center pointer sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addUser"
                  >
                    <i className="icofont-ui-add" />
                  </span>
                </div>
              </div>
              <div className="row g-2 pt-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-user-male" />
                    <span className="ms-2">{project.client.name}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-phone" />
                    <span className="ms-2">{project.client.phone}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <i className="icofont-email " />
                    <span className="ms-2">{project.client.email}</span>
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-ui-text-chat" />
                    <span className="ms-2">10</span>
                  </div>
                </div> */}
              </div>
              <div className="dividers-block" />
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-bold mb-0">Progress</h4>
                <span className="small light-info-bg  p-1 rounded">
                  <i className="icofont-ui-clock" /> Pending
                </span>
              </div>
              <div className="progress" style={{ height: 8 }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar bg-secondary ms-1"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar bg-secondary ms-1"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      );
    case PROJECT_STATUS_TYPES.progress:
      return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="lesson_name">
                  <div className="project-block light-info-bg">
                    <i className={project.projectType.classIcon} />
                  </div>
                  <span className="small text-muted project_name fw-bold">
                    {project.name}
                  </span>
                  <h6 className="mb-0 fw-bold  fs-6  mb-2">
                    {project.projectType.name}
                  </h6>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#editproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-edit text-success" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-ui-delete text-danger" />
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar-list avatar-list-stacked pt-2">
                  <img
                    className="avatar rounded-circle sm"
                    src={avatar8}
                    alt=""
                  />
                  <span
                    className="avatar rounded-circle text-center pointer sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addUser"
                  >
                    <i className="icofont-ui-add" />
                  </span>
                </div>
              </div>
              <div className="row g-2 pt-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-user-male" />
                    <span className="ms-2">{project.client.name}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-phone" />
                    <span className="ms-2">{project.client.phone}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <i className="icofont-email " />
                    <span className="ms-2">{project.client.email}</span>
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-ui-text-chat" />
                    <span className="ms-2">10</span>
                  </div>
                </div> */}
              </div>
              <div className="dividers-block" />
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-bold mb-0">Progress</h4>
                <span className="small light-danger-bg  p-1 rounded">
                  <i className="icofont-ui-clock" /> 35 Days Left
                </span>
              </div>
              <div className="progress" style={{ height: 8 }}>
                <div
                  className="progress-bar bg-primary  progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar bg-primary  progress-bar-striped progress-bar-animated ms-1"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar bg-primary  progress-bar-striped progress-bar-animated ms-1"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      );
    case PROJECT_STATUS_TYPES.approval:
      return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="lesson_name">
                  <div className="project-block light-info-bg">
                    <i className={project.projectType.classIcon} />
                  </div>
                  <span className="small text-muted project_name fw-bold">
                    {project.name}
                  </span>
                  <h6 className="mb-0 fw-bold  fs-6  mb-2">
                    {project.projectType.name}
                  </h6>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#editproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-edit text-success" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-ui-delete text-danger" />
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar-list avatar-list-stacked pt-2">
                  <img
                    className="avatar rounded-circle sm"
                    src={avatar8}
                    alt=""
                  />
                  <span
                    className="avatar rounded-circle text-center pointer sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addUser"
                  >
                    <i className="icofont-ui-add" />
                  </span>
                </div>
              </div>
              <div className="row g-2 pt-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-user-male" />
                    <span className="ms-2">{project.client.name}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-phone" />
                    <span className="ms-2">{project.client.phone}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <i className="icofont-email " />
                    <span className="ms-2">{project.client.email}</span>
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-ui-text-chat" />
                    <span className="ms-2">10</span>
                  </div>
                </div> */}
              </div>
              <div className="dividers-block" />
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-bold mb-0">Progress</h4>
                <span className="small light-warning-bg  p-1 rounded">
                  <i className="icofont-ui-clock" /> Approval
                </span>
              </div>
              <div className="progress" style={{ height: 8 }}>
                <div
                  className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      );
    case PROJECT_STATUS_TYPES.completed:
      return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="lesson_name">
                  <div className="project-block light-info-bg">
                    <i className={project.projectType.classIcon} />
                  </div>
                  <span className="small text-muted project_name fw-bold">
                    {project.name}
                  </span>
                  <h6 className="mb-0 fw-bold  fs-6  mb-2">
                    {project.projectType.name}
                  </h6>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteproject"
                    onClick={handleCurrentProject}
                  >
                    <i className="icofont-ui-delete text-danger" />
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar-list avatar-list-stacked pt-2">
                  <img
                    className="avatar rounded-circle sm"
                    src={avatar8}
                    alt=""
                  />
                </div>
              </div>
              <div className="row g-2 pt-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-user-male" />
                    <span className="ms-2">{project.client.name}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-phone" />
                    <span className="ms-2">{project.client.phone}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <i className="icofont-email " />
                    <span className="ms-2">{project.client.email}</span>
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="icofont-ui-text-chat" />
                    <span className="ms-2">10</span>
                  </div>
                </div> */}
              </div>
              <div className="dividers-block" />
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="small fw-bold mb-0">Progress</h4>
                <span className="small light-success-bg  p-1 rounded">
                  <i className="icofont-ui-clock" /> Completed
                </span>
              </div>
              <div className="progress" style={{ height: 8 }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar bg-success ms-1"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className="progress-bar bg-success ms-1"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={39}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      <></>;
      break;
  }
};

export default ProjectCard;
