import React, { Component } from "react";
import CircleButton from "./CircleButton";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import VendorContainer from "./VendorContainer";
import VendorWrapper from "./VendorWrapper";
import StepCounter from "./StepCounter";

export default class FuneraryServices extends Component {
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
            funerary1: file(relativePath: { eq: "funerary1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            funerary2: file(relativePath: { eq: "funerary2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            funerary3: file(relativePath: { eq: "funerary3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            funerary4: file(relativePath: { eq: "funerary4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            funerary5: file(relativePath: { eq: "funerary5.jpeg" }) {
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
            <h2 className="inner--headline">Funerary Services</h2>
            <p>
              Unfortunately {user.name}, dealing with the loss of a loved one is
              something that needs to be taken care of, from decisions on
              burial/cremation, to memorial services and venues. Our funerary
              experts have been curated from top experts in your area, and are
              here to help in every way possible.
            </p>
            <VendorContainer>
              <VendorWrapper
                type="funerary"
                img={
                  <Img
                    fluid={data.funerary1.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Burn's Family Funeral Home"
                address={`121 S Main Street, ${user.zip}`}
                price="$$$$"
                handleSelection={handleSelection}
                next="3"
              />
              <VendorWrapper
                type="funerary"
                img={
                  <Img
                    fluid={data.funerary2.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Stevenson Mortuary"
                address={`7527 Washington Ave, ${user.zip}`}
                price="$$$$$"
                handleSelection={handleSelection}
                next="3"
              />
              <VendorWrapper
                type="funerary"
                img={
                  <Img
                    fluid={data.funerary3.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="King Cemetery"
                address={`5 Park Place, ${user.zip}`}
                price="$$$"
                handleSelection={handleSelection}
                next="3"
              />
              <VendorWrapper
                type="funerary"
                img={
                  <Img
                    fluid={data.funerary4.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Las Vegas Funeral Home"
                address={`89776 S Easter Ave, ${user.zip}`}
                price="$$"
                handleSelection={handleSelection}
                next="3"
              />
              <VendorWrapper
                type="funerary"
                img={
                  <Img
                    fluid={data.funerary5.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Smile Services"
                address={`1036 Forest Peak, ${user.zip}`}
                price="$"
                handleSelection={handleSelection}
                next="3"
              />
            </VendorContainer>
            <Link to="app/step3" className="center">
              <CircleButton med>Skip</CircleButton>
            </Link>
          </div>
        )}
      />
    );
  }
}
