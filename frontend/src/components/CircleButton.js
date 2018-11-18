import styled from "styled-components";

const CircleButton = styled.button`
  width: ${props => {
    if (props.large) return "200px";
    if (props.med) return "150px";
    if (props.small) return "100px";
    return "100px";
  }};
  height: ${props => {
    if (props.large) return "200px";
    if (props.med) return "150px";
    if (props.small) return "10px";
    return "100px";
  }};
  margin: 1rem;
  border: none;
  color: white;
  background: #778fa6;
  border-radius: 50%;
  transition: all 0.2s linear;
  &:hover {
    background: #6b8095;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: ${props => {
      if (props.large) return "300px";
      if (props.med) return "200px";
      if (props.small) return "100px";
      return "100px";
    }};

    height: ${props => {
      if (props.large) return "300px";
      if (props.med) return "200px";
      if (props.small) return "100px";
      return "100px";
    }};
  }
`;

export default CircleButton;
