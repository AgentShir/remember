import styled from "styled-components";

const Button = styled.button`
  min-width: ${props => {
    if (props.large) return "300px";
    if (props.med) return "225px";
    if (props.small) return "150px";
    return "225px";
  }};
  margin: 1rem;
  border: none;
  color: white;
  background: #778fa6;
  border-radius: 20px;
  transition: all 0.2s linear;
  &:hover {
    background: #6b8095;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    min-width: ${props => {
      if (props.large) return "500px";
      if (props.med) return "400px";
      if (props.small) return "300px";
      return "400px";
    }};

    height: ${props => (props.large ? "50px" : "auto")};
  }
`;

export default Button;
