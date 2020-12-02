
export const goToPageLogin = (history) => {
  history.push("/");
};

export const goToPageSignup = (history) => {
  history.push("/signup");
};

export const goToPageFeeds= (history) => {
  history.push("/feeds");
};

export const goToPagePost = (history, id ) => {
  history.push(`/post/${id}` );
};
