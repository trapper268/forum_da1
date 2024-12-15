import ROUTES from "./route";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: ROUTES.HOME,
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    // route: ROUTES.COMMUNITY,
    route: ROUTES.HOME,
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    // route: ROUTES.COLLECTION,
    route: ROUTES.HOME,
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    // route: ROUTES.JOBS,
    route: ROUTES.HOME,
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    // route: ROUTES.TAGS,
    route: ROUTES.HOME,
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    // route: ROUTES.PROFILE,
    route: ROUTES.HOME,
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: ROUTES.ASK_QUESTION,
    label: "Ask a question",
  },
];
