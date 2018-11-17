import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";

export default class GetUserType extends Component {
  render() {
    const { handleUserTypeChange } = this.props;
    return (
      <Page>
        <h2>First, help us get to know you.</h2>
        <h3>Are you the dying, or are you the bereived?</h3>
        <div className="button-container">
          <Button small onClick={() => handleUserTypeChange("dying")}>
            Dying
          </Button>
          <Button small onClick={() => handleUserTypeChange("bereived")}>
            Bereived
          </Button>
        </div>
      </Page>
    );
  }
}

const Page = styled.div`
  h2,
  h3 {
    text-align: center;
  }

  .button-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
