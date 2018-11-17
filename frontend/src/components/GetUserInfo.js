import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";

export default class GetUserInfo extends Component {
  render() {
    const {
      firstName,
      lastName,
      zip,
      password,
      confirmPassword,
      email,
      handleEmailChange,
      handleFirstNameChange,
      handleLastNameChange,
      handleZipChange,
      handlePasswordChange,
      handleConfirmPasswordChange,
      handleSubmit,
    } = this.props;
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
            required
          />
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            name="zip"
            value={zip}
            onChange={handleZipChange}
            placeholder="Zip Code"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <label htmlFor="confimPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Password"
            required
          />
          <Button large type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label,
  button {
    margin-top: 1rem;
  }
  input {
    margin-top: 0.5rem;
    max-width: 30rem;
  }
`;
