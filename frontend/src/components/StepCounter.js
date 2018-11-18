import React, { Component } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

export default class StepCounter extends Component {
  handleClick = stepKey => () => {
    navigate(`/app/step${stepKey}`);
  };

  render() {
    const { location } = this.props;
    const index = parseInt(
      location.pathname.slice(9, location.pathname.length)
    );

    return (
      <CounterWrapper>
        <StepBar stepKey={1} index={index} onClick={this.handleClick(1)} />
        <StepBar stepKey={2} index={index} onClick={this.handleClick(2)} />
        <StepBar stepKey={3} index={index} onClick={this.handleClick(3)} />
        <StepBar stepKey={4} index={index} onClick={this.handleClick(4)} />
        <StepBar stepKey={5} index={index} onClick={this.handleClick(5)} />
      </CounterWrapper>
    );
  }
}

const CounterWrapper = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StepBar = styled.div`
  width: 19%;
  height: 20px;
  background-color: ${({ stepKey, index }) => {
    if (stepKey <= index) {
      return "#778fa6";
    }
    return "white";
  }};
  transform: skewX(-45deg);
  &:hover {
    cursor: pointer;
    background-color: ${({ stepKey, index }) => {
      if (stepKey <= index) {
        return "#6b8095";
      }
      return "#778fa6";
    }};
  }
`;
