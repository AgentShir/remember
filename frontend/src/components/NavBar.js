import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo";
import { Link, navigate } from "gatsby";
import { logOut } from "../utils/auth";

export default class NavBar extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <StyledNav>
          <Link to="/">
            <StyledLogo />
          </Link>
          <button className="flex" onClick={logOut}>
            <h5>Log Out</h5>
          </button>
        </StyledNav>
      );
    }
    return (
      <StyledNav>
        <Link to="/">
          <StyledLogo />
        </Link>
        <button className="flex" onClick={() => navigate("/login")}>
          <h5>Log In</h5>
        </button>
      </StyledNav>
    );
  }
}

const StyledNav = styled.nav`
  height: 80px;
  width: 100vw;
  position: sticky;
  background-color: rgba(119, 143, 166, 0.4);
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    &:hover {
      cursor: pointer;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    h5 {
      color: white;
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    h5 {
      margin: 0 auto;
      color: white;
    }
  }
`;

const StyledLogo = styled(Logo)`
  width: 125px;
  height: auto;
  transition: all 250ms ease;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
