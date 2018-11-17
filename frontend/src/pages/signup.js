import React, { Component } from "react";
import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";
export default class Signup extends Component {
  render() {
    return (
      <Layout>
        <SignupForm />
      </Layout>
    );
  }
}
