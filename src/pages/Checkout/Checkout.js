import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header.js";

export default function Cart({ selected, products }) {
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

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <CheckoutItems>
          <EachItem>
            <p>Tipo</p>
            <p>Descrição</p>
          </EachItem>
          <EachItem>
            <p>Carboidrado</p>
            <p>{carbo.description}</p>
          </EachItem>
          <EachItem>
            <p>Proteína</p>
            <p>{prot.description}</p>
          </EachItem>
          <EachItem>
            <p>Salada</p>
            <p>{salad.description}</p>
          </EachItem>
        </CheckoutItems>
        <Footer onClick={() => navigate("/Homepage")}>
          Voltar para as opções
        </Footer>
        <Footer>Confirmar pedido</Footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutItems = styled.div`
  margin-top: 5vh;
  background-color: white;
  width: 80vw;
  max-width: 500px;
  height: 50vh;
  border: none;
  border-radius: 10px;
`;

const EachItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  margin-bottom: 3vh;

  p {
    width: 40vw;
    max-width: 250px;
    display: flex;
  }
`;

const Footer = styled.button`
  width: 80vw;
  max-width: 500px;
  height: 5vh;
  margin-top: 5vh;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
