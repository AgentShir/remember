import jwt_decode from "jwt-decode";
import { navigate } from "gatsby";

const getUser = body => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token.slice(7, token.length));
  if (token) {
    return decoded;
  }
  /*
    try {
      const response = await fetch(
        "https://remember-backend.herokuapp.com/api/getuser",
        {
          method: "POST",
          body: JSON.stringify({ ...body }),
          headers: {
            "content-type": "application/JSON",
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  }
   */

  // if there isn't a user, return false
  return true;
};

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
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
    await response.json();

    return true;
  } catch (error) {
    navigate("/error");
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

const logOut = () => {
  localStorage.removeItem("token");
  navigate("/");
};

export { loginUser, registerUser, getUser, isLoggedIn, logOut };
