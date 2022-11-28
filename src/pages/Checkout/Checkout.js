import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Footer onClick={() => navigate("/Homepage")}>
        Voltar para as opções
      </Footer>
    </>
  );
}

const Footer = styled.button`
  width: 80vw;
  height: 5vh;
  margin-top: 10%;
  margin-left: 10vw;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
