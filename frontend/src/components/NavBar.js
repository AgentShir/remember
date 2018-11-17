import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo";
import { Link } from "gatsby";

export default class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <Link to="/">
          <StyledLogo />
        </Link>
        <button>Log In</button>
      </StyledNav>
    );
  }
}

const StyledNav = styled.nav`
  height: 80px;
  width: 100vw;
  position: sticky;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
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
