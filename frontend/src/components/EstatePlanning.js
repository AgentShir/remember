import React, { Component } from "react";
import CircleButton from "./CircleButton";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import VendorContainer from "./VendorContainer";
import StepCounter from "./StepCounter";
import VendorWrapper from "./VendorWrapper";

export default class EstatePlanning extends Component {
  render() {
    const { user, handleSelection } = this.props;
    if (!user) {
      return null;
    }
    const imgStyle = {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
    };
    return (
      <StaticQuery
        query={graphql`
          query {
            estate1: file(relativePath: { eq: "estate1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            estate2: file(relativePath: { eq: "estate2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            estate3: file(relativePath: { eq: "estate3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            estate4: file(relativePath: { eq: "estate4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            estate5: file(relativePath: { eq: "estate5.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className="inner">
            <StepCounter location={this.props.location} />
            <h2 className="inner--headline">Estate Planning</h2>
            <p>
              Estate planning can be a ciritical point for any family facing a
              loss. Needing a will? Tax prep? General advice on your assets? No
              matter the questions, our estate planners with have the answers.
            </p>
            <VendorContainer>
              <VendorWrapper
                type="estate"
                img={
                  <Img
                    fluid={data.estate1.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Mike Jones, CPA"
                address={`1231 Oak Street, ${user.zip}`}
                price="$$$"
                handleSelection={handleSelection}
                next="4"
              />
              <VendorWrapper
                type="estate"
                img={
                  <Img
                    fluid={data.estate2.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Marquee Investments"
                address={`7339 Pennsylvania Ave, ${user.zip}`}
                price="$$$$$"
                handleSelection={handleSelection}
                next="4"
              />
              <VendorWrapper
                type="estate"
                img={
                  <Img
                    fluid={data.estate3.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="SplitSpace"
                address={`125 Irving Parkway, ${user.zip}`}
                price="$"
                handleSelection={handleSelection}
                next="4"
              />
              <VendorWrapper
                type="estate"
                img={
                  <Img
                    fluid={data.estate4.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Southwest Partners"
                address={`893 Boardwalk, ${user.zip}`}
                price="$$"
                handleSelection={handleSelection}
                next="4"
              />
              <VendorWrapper
                type="estate"
                img={
                  <Img
                    fluid={data.estate5.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="ITG Capital"
                address={`888 Greenway, ${user.zip}`}
                price="$"
                handleSelection={handleSelection}
                next="4"
              />
            </VendorContainer>
            <Link to="app/step4" className="center">
              <CircleButton med>Skip</CircleButton>
            </Link>
          </div>
        )}
      />
    );
  }
}
