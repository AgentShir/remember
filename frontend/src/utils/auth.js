import jwt_decode from "jwt-decode";

const getUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    // decode the jwt
    const decoded = jwt_decode(token);

    //return user data from token
    return decoded;
  }

  // if there isn't a user, return false
  return true;
};

export const isLoggedIn = () => {
  const user = getUser();
  if (user) {
    return user;
  }
  return false;
};
