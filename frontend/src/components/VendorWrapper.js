import React, { Component } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

export default class VendorWrapper extends Component {
  render() {
    const {
      name,
      address,
      price,
      phone,
      img,
      handleSelection,
      type,
      next,
    } = this.props;
    return (
      <Wrapper
        onClick={() => {
          handleSelection(`${type}.name`, {
            name: name,
          });
          handleSelection(`${type}.address`, {
            address: address,
          });
          handleSelection(`${type}.price`, {
            price: price,
          });
          navigate(`/app/step${next}`);
        }}
      >
        {img}
        <h3>{name}</h3>
        <h4>{address}</h4>
        <h4>{price}</h4>
        <h4>{phone}</h4>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  padding: 1rem;
  margin: 2rem 1rem;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;
  text-align: center;
  & :hover {
    cursor: pointer;
  }

  h2,
  h3,
  h4,
  h5 {
    margin-top: 0.5rem;
  }
`;
