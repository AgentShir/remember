import React from "react";
import { navigate, Link } from "gatsby";

import Layout from "../components/Layout";
import Logo from "../assets/Logo.svg";
import Button from "../components/Button";
export default () => (
  <Layout>
    <div className="inner">
      <img src={Logo} alt="Remember logo" />
      <p>
        We at remember are here to help guide you through life's toughest
        moments. Whether you need assistance with funeral services, vendors for
        flowers, or just a helping hand, let us walk you through these moments
        and help you remember.
      </p>
      <Button large className="center" onClick={() => navigate("/signup")}>
        Sign Up
      </Button>
      <p className="center">
        Already have an account?
        <Link to="/login">
          <u>Log In</u>
        </Link>
      </p>
    </div>
  </Layout>
);
