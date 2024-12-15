const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/question/${id}`,
  TAGS: (id: string) => `/tags/${id}`,

  // COMMUNITY: "/community",
  // COLLECTION: "/collection",
  // JOBS: "/find-jobs",
  // TAGS: "/tags",
  // PROFILE: "/profiles",
};

export default ROUTES;
