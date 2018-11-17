const getUser = () => {
  if (window.localStorage.getItem("token")) {
    //return user from token
    return false;
  }
  return false;
};

export const isLoggedIn = () => {
  const user = getUser();
  return user;
};
