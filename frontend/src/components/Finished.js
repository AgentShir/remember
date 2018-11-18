import React, { Component } from "react";
import StepCounter from "./StepCounter";
import styled from "styled-components";

export default class Finished extends Component {
  render() {
    const flowers = JSON.parse(localStorage.getItem("flowers.name")).name;
    const funerary = JSON.parse(localStorage.getItem("funerary.name")).name;
    const estate = JSON.parse(localStorage.getItem("estate.name")).name;
    const pet = JSON.parse(localStorage.getItem("pet.name")).name;
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return (
      <div className="inner">
        <StepCounter location={this.props.location} />
        <h2 className="inner--headline">That's it. You're done!</h2>
        <h3 style={{ fontSize: "40px" }}>
          Life is Short, {user.firstName}. Go enjoy it.
        </h3>
        <p>
          We've contacted the following vendors on your behalf, and they will be
          scheduling services with you shortly.
        </p>
        <ChosenVendors>
          <p>Flowers: {flowers || "none selected"}</p>
          <p>Funerary Services: {funerary || "none selected"}</p>
          <p>Estate Management: {estate || "none selected"}</p>
          <p>Pet Care: {pet || "none selected"}</p>
        </ChosenVendors>
      </div>
    );
  }
}

const ChosenVendors = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid white;
`;
