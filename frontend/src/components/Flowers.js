import React, { Component } from "react";
import CircleButton from "./CircleButton";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import VendorContainer from "./VendorContainer";
import StepCounter from "./StepCounter";
import VendorWrapper from "./VendorWrapper";

export default class Flowers extends Component {
  render() {
    console.log(this.props);
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
            flowers1: file(relativePath: { eq: "flowers1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            flowers2: file(relativePath: { eq: "flowers2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            flowers3: file(relativePath: { eq: "flowers3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            flowers4: file(relativePath: { eq: "flowers4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            flowers5: file(relativePath: { eq: "flowers5.jpeg" }) {
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
            <h2 className="inner--headline">Flowers</h2>
            <p>
              {user.firstName}, we all want our rememberance to be something
              beautiful. Let's start on a positive note. Select a florist from
              the vendors below so everyone remembers the beauty of life.
            </p>
            <VendorContainer>
              <VendorWrapper
                type="flowers"
                img={
                  <Img
                    fluid={data.flowers1.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Unique Arrangements"
                address={`121 S Main Street, ${user.zip}`}
                price="$$$$"
                handleSelection={handleSelection}
                next="2"
              />
              <VendorWrapper
                type="flowers"
                img={
                  <Img
                    fluid={data.flowers2.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Bloomerang's"
                address={`7527 Washington Ave, ${user.zip}`}
                price="$$$$$"
                handleSelection={handleSelection}
                next="2"
              />
              <VendorWrapper
                type="flowers"
                img={
                  <Img
                    fluid={data.flowers3.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Beautiful Blossoms"
                address={`5 Park Place, ${user.zip}`}
                price="$$$"
                handleSelection={handleSelection}
                next="2"
              />
              <VendorWrapper
                type="flowers"
                img={
                  <Img
                    fluid={data.flowers4.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="The Flower Pot"
                address={`89776 S Easter Ave, ${user.zip}`}
                price="$$"
                handleSelection={handleSelection}
                next="2"
              />
              <VendorWrapper
                type="flowers"
                img={
                  <Img
                    fluid={data.flowers5.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Happy Petals"
                address={`1036 Forest Peak, ${user.zip}`}
                price="$"
                handleSelection={handleSelection}
                next="2"
              />
            </VendorContainer>
            <Link to="app/step2" className="center">
              <CircleButton med>Skip</CircleButton>
            </Link>
          </div>
        )}
      />
    );
  }
}
