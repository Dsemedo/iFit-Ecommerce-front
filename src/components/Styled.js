import styled from "styled-components";
import { Color2 } from "../assets/Colors";

export const Footer = styled.button`
  width: 80vw;
  max-width: 400px;
  height: 5vh;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Message = styled.div`
  font-family: "Raleway", sans-serif;
  color: ${Color2};
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
`;
