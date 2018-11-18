import styled from "styled-components";

const BigRedBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #de3a30;
  min-width: 60px;
  height: 100px;
  align-self: center;
  border-radius: 5px;
  font-size: 100px;
  @media (min-width: 768px) {
    min-width: 90px;
    height: 150px;
  }
`;

export default BigRedBox;
