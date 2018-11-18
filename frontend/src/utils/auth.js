import jwt_decode from "jwt-decode";

const getUser = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    // decode the jwt
    const decoded = jwt_decode(token.slice(7, token.length));
    console.log(decoded);
    //return user data from token
    return decoded;
  }

  // if there isn't a user, return false
  return true;
};

const isLoggedIn = () => {
  const user = getUser();
  if (user) {
    return user;
  }
  return false;
};

const registerUser = async body => {
  try {
    const response = await fetch(
      "https://remember-backend.herokuapp.com/api/register",
      {
        method: "POST",
        body: JSON.stringify({ ...body }),
        headers: {
          "content-type": "application/JSON",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    return error;
  }
};

const loginUser = async body => {
  try {
    const response = await fetch(
      "https://remember-backend.herokuapp.com/api/login",
      {
        method: "POST",
        body: JSON.stringify({ ...body }),
        headers: {
          "content-type": "application/JSON",
        },
      }
    );
    const data = await response.json();
    localStorage.setItem("token", data.token);
  } catch (error) {
    return error;
  }
};

export { loginUser, registerUser, getUser, isLoggedIn };
