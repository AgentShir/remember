import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../utils/auth";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  console.log(!isLoggedIn());
  if (!isLoggedIn()) {
    // If we’re not logged in, redirect to the login page.
    navigate(`/login`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
