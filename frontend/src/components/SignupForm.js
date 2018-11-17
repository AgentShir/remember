import React, { Component } from "react";
import GetUserType from "./GetUserType";
import PoseTransition from "../utils/PoseTransition";

export default class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    zip: "",
    userType: "",
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleZipChange = event => {
    this.setState({
      zip: event.target.value,
    });
  };

  handleUserTypeChange = type => {
    this.setState({
      userType: type,
    });
  };

  render() {
    return (
      <div className="inner">
        {!this.state.userType && (
          <PoseTransition>
            <GetUserType handleUserTypeChange={this.handleUserTypeChange} />
          </PoseTransition>
        )}
        {this.state.userType && (
          <PoseTransition>
            <div>Hey</div>
          </PoseTransition>
        )}
      </div>
    );
  }
}
