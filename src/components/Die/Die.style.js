import styled from "styled-components";

export const DieWrapper = styled.button`
  cursor: pointer;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  box-shadow: 0px 2px 2px 0px #00000026;
  background-color: ${(props) => (props.isHeld ? "#59e391" : "#fff")};
  transition: background-color 0.1s ease-in;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;
