import React, { Component } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Transition } from "../utils/Transition";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            background: file(relativePath: { eq: "background.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <StyledLayout>
            <Img
              fluid={data.background.childImageSharp.fluid}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <BgMask />
            <Transition>{children}</Transition>
          </StyledLayout>
        )}
      />
    );
  }
}

//-------------Styles------------------//

const StyledLayout = styled.main`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 14pt;
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a {
    color: white;
  }

  .inner {
    max-width: 1200px;
    padding: 2rem;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    h1,
    h2,
    h3,
    p {
      margin-top: 2rem;
    }
  }

  .center {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    font-size: 18pt;
    h1,
    h2,
    h3,
    p {
      margin-top: 2rem;
    }
  }
`;

const BgMask = styled.div`
  background-color: #111;
  opacity: 0.25;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

export default Layout;
