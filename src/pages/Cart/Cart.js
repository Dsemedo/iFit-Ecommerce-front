import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header.js";

export default function Cart({ selected, setSelected, products }) {
  const navigate = useNavigate();

  let carbo = {};
  let prot = {};
  let salad = {};

  products.forEach(pickItems);

  function pickItems(eachProduct) {
    if (
      selected.includes(eachProduct.name) &&
      eachProduct.category === "carboidrato"
    ) {
      carbo = eachProduct;
    }

    if (
      selected.includes(eachProduct.name) &&
      eachProduct.category === "proteina"
    ) {
      prot = eachProduct;
    }

    if (
      selected.includes(eachProduct.name) &&
      eachProduct.category === "salada"
    ) {
      salad = eachProduct;
    }
  }

  console.log("carbo", carbo);

  // useEffect(() => {
  //   if (selected.includes(products.name)) {
  //     console.log("Entrei Aqui");
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Container>
        <Description>
          {carbo.name ? carbo.name : "Carboidrado ainda não selecionado"}
        </Description>
        <Description>
          {prot.name ? prot.name : "Proteína ainda não selecionado"}
        </Description>
        <Description>
          {salad.name ? salad.name : "Salada ainda não selecionado"}
        </Description>
      </Container>
      <Footer onClick={() => navigate("/Homepage")}>
        Voltar para as opções
      </Footer>
      <Footer onClick={() => navigate("/Checkout")}>Finalizar o pedido</Footer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  background-color: yellow;
  width: 80vw;
  max-width: 400px;

  height: 3vh;
  max-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5vh;
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
