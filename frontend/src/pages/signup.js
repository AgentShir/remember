import React, { Component } from "react";
import LayoutWithNav from "../components/LayoutWithNav";
import SignupForm from "../components/SignupForm";
export default class Signup extends Component {
  render() {
    return (
      <LayoutWithNav>
        <SignupForm />
      </LayoutWithNav>
    );
  }
}
