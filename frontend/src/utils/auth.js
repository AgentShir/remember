const getUser = () => {
  if (window.localStorage.getItem("token")) {
    //return user from token
    return null;
  }
  return null;
};

export const isLoggedIn = () => {
  return false;
};
