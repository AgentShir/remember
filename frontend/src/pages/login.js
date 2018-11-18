import React, { Component } from "react";
import LayoutWithNav from "../components/LayoutWithNav";
import LoginForm from "../components/LoginForm";
import { loginUser, getUser } from "../utils/auth";
import PoseTransition from "../utils/PoseTransition";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    loginUser(this.state);
    getUser();
  };

  render() {
    return (
      <LayoutWithNav>
        <PoseTransition>
          <LoginForm
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
            handleEmailChange={this.handleEmailChange}
            {...this.state}
          />
        </PoseTransition>
      </LayoutWithNav>
    );
  }
}
