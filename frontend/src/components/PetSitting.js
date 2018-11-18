import React, { Component } from "react";
import CircleButton from "./CircleButton";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import VendorContainer from "./VendorContainer";
import VendorWrapper from "./VendorWrapper";
import StepCounter from "./StepCounter";

export default class PetSitting extends Component {
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
            pet1: file(relativePath: { eq: "pet1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pet2: file(relativePath: { eq: "pet2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pet3: file(relativePath: { eq: "pet3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pet4: file(relativePath: { eq: "pet4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pet5: file(relativePath: { eq: "pet5.jpeg" }) {
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
            <h2 className="inner--headline">Pet Sitting</h2>
            <p>
              Although it may seem trivial, pets are often one of the most
              important parts of a person's life. Whethere you need someone to
              watch a pet for an extended period of time, dog walking services,
              and just a periodic check-in to feed boots, there are many options
              available to you.
            </p>
            <VendorContainer>
              <VendorWrapper
                type="pet"
                img={
                  <Img
                    fluid={data.pet1.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="PetPals"
                address={`77 S. Oakland Blvd, ${user.zip}`}
                price="$$"
                handleSelection={handleSelection}
                next="5"
              />
              <VendorWrapper
                type="pet"
                img={
                  <Img
                    fluid={data.pet2.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Meow Men"
                address={`80023 Colorado Street, ${user.zip}`}
                price="$$"
                handleSelection={handleSelection}
                next="5"
              />
              <VendorWrapper
                type="pet"
                img={
                  <Img
                    fluid={data.pet3.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Green Acres Pet Daycare"
                address={`1223 Kafka Parkway, ${user.zip}`}
                price="$$"
                handleSelection={handleSelection}
                next="5"
              />
              <VendorWrapper
                type="pet"
                img={
                  <Img
                    fluid={data.pet4.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Walk4U"
                address={`146 Pasture Way, ${user.zip}`}
                price="$"
                handleSelection={handleSelection}
                next="5"
              />
              <VendorWrapper
                type="pet"
                img={
                  <Img
                    fluid={data.pet5.childImageSharp.fluid}
                    style={imgStyle}
                  />
                }
                name="Friendly Pet Experts"
                address={`853 E. Stephanie, ${user.zip}`}
                price="$"
                handleSelection={handleSelection}
                next="5"
              />
            </VendorContainer>
            <Link to="app/step5" className="center">
              <CircleButton med>Skip</CircleButton>
            </Link>
          </div>
        )}
      />
    );
  }
}
