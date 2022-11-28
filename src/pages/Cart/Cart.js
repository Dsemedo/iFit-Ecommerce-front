import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header.js";

export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Footer onClick={() => navigate("/Homepage")}>
        Voltar para as opções
      </Footer>
      <Footer onClick={() => navigate("/Checkout")}>Finalizar o pedido</Footer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.button`
  width: 80vw;
  height: 5vh;
  margin-top: 10%;
  margin-left: 10vw;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
