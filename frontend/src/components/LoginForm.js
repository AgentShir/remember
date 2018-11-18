import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";

export default class LoginForm extends Component {
  render() {
    const {
      handleEmailChange,
      handlePasswordChange,
      handleSubmit,
      email,
      password,
    } = this.props;
    return (
      <Form method="POST" onSubmit={handleSubmit}>
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
        <Button large type="submit" onClick={handleSubmit}>
          Log In
        </Button>
      </Form>
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
