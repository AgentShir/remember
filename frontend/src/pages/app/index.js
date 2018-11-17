import React from "react";
import { Router } from "@reach/router";
import LayoutWithNav from "../../components/LayoutWithNav";
import Dashboard from "../../components/Dashboard";
import PrivateRoute from "../../components/PrivateRoute";

const app = () => (
  <LayoutWithNav loggedIn>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
    </Router>
  </LayoutWithNav>
);

export default app;
