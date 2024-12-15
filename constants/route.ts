const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMUNITY: "/community",
  COLLECTION: "/collection",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  PROFILE: "/profiles",
  ASK_QUESTION: "/ask-question",

  PROFILES: (id: string) => `/profile/${id}`,
  TAG: (id: string) => `/tags/${id}`,
};

export default ROUTES;
