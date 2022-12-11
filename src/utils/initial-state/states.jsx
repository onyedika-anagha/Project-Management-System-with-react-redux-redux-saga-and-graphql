const makeId = (length = 12) => {
  var result = "";
  var characters = "123456789123456789123456789123456789123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
//

export const PROJECT_TYPE_OPTIONS = [
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Website Design", label: "Website Design" },
  { value: "Web Development", label: "Web Development" },
  { value: "App Development", label: "App Development" },
  { value: "Development", label: "Development" },
  { value: "Backend Development", label: "Backend Development" },
  { value: "Software Testing", label: "Software Testing" },
  { value: "Marketing", label: "Marketing" },
  { value: "SEO", label: "SEO" },
  { value: "Other", label: "Other" },
];

export const PROJECT_TYPES = {
  web_development: {
    name: "Web Development",
    classIcon: "icofont-web",
  },
  app_development: {
    name: "App Development",
    classIcon: "icofont-ui-touch-phone",
  },
  ui_ux_design: {
    name: "UI/UX Design",
    classIcon: "icofont-paint",
  },
  backend_development: {
    name: "Backend Development",
    classIcon: "icofont-site-map",
  },
  others: {
    name: "others",
    classIcon: "icofont-site-map",
  },
};

export const getProjectTypes = (name) => {
  switch (name) {
    case PROJECT_TYPES.web_development.name:
      return PROJECT_TYPES.web_development;

    case PROJECT_TYPES.app_development.name:
      return PROJECT_TYPES.app_development;

    case PROJECT_TYPES.ui_ux_design.name:
      return PROJECT_TYPES.ui_ux_design;

    case PROJECT_TYPES.backend_development.name:
      return PROJECT_TYPES.backend_development;

    default:
      return { ...PROJECT_TYPES.others, name: name };
  }
};

export const PROJECT_STATUS_TYPES = {
  new: "Not Started",
  progress: "In Progress",
  approval: "Waiting Approval",
  completed: "Completed",
};
export const projects = [
  {
    id: makeId(),
    name: "Product 1",
    projectType: PROJECT_TYPES.web_development,
    description: "Product 1 description",
    status: PROJECT_STATUS_TYPES.new,
  },
  {
    id: makeId(),
    name: "Product 2",
    projectType: PROJECT_TYPES.web_development,
    description: "Product 2 description",
    status: PROJECT_STATUS_TYPES.progress,
  },
  {
    id: makeId(),
    name: "Product 3",
    projectType: PROJECT_TYPES.app_development,
    description: "Product 3 description",
    status: PROJECT_STATUS_TYPES.progress,
  },
  {
    id: makeId(),
    name: "Product 4",
    projectType: PROJECT_TYPES.ui_ux_design,
    description: "Product 4 description",
    status: PROJECT_STATUS_TYPES.progress,
  },
  {
    id: makeId(),
    name: "Product 5",
    projectType: PROJECT_TYPES.backend_development,
    description: "Product 5 description",
    status: PROJECT_STATUS_TYPES.approval,
  },
  {
    id: makeId(),
    name: "Product 6",
    projectType: PROJECT_TYPES.web_development,
    description: "Product 6 description",
    status: PROJECT_STATUS_TYPES.approval,
  },
  {
    id: makeId(),
    name: "Product 7",
    projectType: PROJECT_TYPES.web_development,
    description: "Product 7 description",
    status: PROJECT_STATUS_TYPES.approval,
  },
  {
    id: makeId(),
    name: "Product 8",
    projectType: PROJECT_TYPES.web_development,
    description: "Product 8 description",
    status: PROJECT_STATUS_TYPES.approval,
  },
  {
    id: makeId(),
    name: "Product 9",
    projectType: PROJECT_TYPES.app_development,
    description: "Product 9 description",
    status: PROJECT_STATUS_TYPES.completed,
  },
  {
    id: makeId(),
    name: "Product 10",
    projectType: PROJECT_TYPES.ui_ux_design,
    description: "Product 10 description",
    status: PROJECT_STATUS_TYPES.completed,
  },
  {
    id: makeId(),
    name: "Product 11",
    projectType: PROJECT_TYPES.app_development,
    description: "Product 11 description",
    status: PROJECT_STATUS_TYPES.completed,
  },
  {
    id: makeId(),
    name: "Product 12",
    projectType: PROJECT_TYPES.backend_development,
    description: "Product 12 description",
    status: PROJECT_STATUS_TYPES.completed,
  },
  {
    id: makeId(),
    name: "Product 13",
    projectType: PROJECT_TYPES.ui_ux_design,
    description: "Product 13 description",
    status: PROJECT_STATUS_TYPES.new,
  },
];
export const clients = [
  {
    id: makeId(14),
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phone: "081000000000",
  },
  {
    id: makeId(),
    name: "Peter Dom",
    email: "peterdom@gmail.com",
    phone: "0810000000000",
  },
  {
    id: makeId(),
    name: "Mark Peter",
    email: "markpeter@gmail.com",
    phone: "0810000000000",
  },
  {
    id: makeId(),
    name: "Selena James",
    email: "selenajames@gmail.com",
    phone: "0810000000000",
  },
];
export const categories = [
  {
    id: 0,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-4.png",
    title: "Phones",
  },
  {
    id: 1,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-5.png",
    title: "Computers",
  },
  {
    id: 2,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-11.png",
    title: "Accessories",
  },
  {
    id: 3,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-6.png",
    title: "Laptops",
  },
  {
    id: 4,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-2.png",
    title: "Monitors",
  },
  {
    id: 5,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-7.png",
    title: "Networking",
  },
  {
    id: 6,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-8.png",
    title: "PC Gaming",
  },
  {
    id: 7,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-1.png",
    title: "Smartwatches",
  },
  {
    id: 8,
    toLink: "#",
    imageUrl: "/assets/images/product/categories/elec-9.png",
    title: "Headphones",
  },
];
