import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header.js";
import { Footer, Message } from "../../components/Styled.js";
import { Color1, Color2, Color3, Color4, Color5 } from "../../assets/Colors.js";

export default function Cart({ selected, products }) {
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

  function FinalizeOrder() {
    // navigate("/Checkout");
    if (
      carbo.name === undefined ||
      prot.name === undefined ||
      salad.name === undefined
    ) {
      alert("Por favor, selecione pelo menos um item de cada tipo!");
      navigate("/Homepage");
    }

    navigate("/checkout");
  }

  return (
    <MaxContainer>
      <Header />
      <Message>Confira seu pedido!</Message>
      <Container>
        <h1>Carboidrato</h1>
        <Description item={carbo.name}>
          {carbo.name ? carbo.name : "Carboidrado ainda não selecionado"}
        </Description>
        <h1>Proteína</h1>
        <Description item={prot.name}>
          {prot.name ? prot.name : "Proteína ainda não selecionada"}
        </Description>
        <h1>Salada</h1>
        <Description item={salad.name}>
          {salad.name ? salad.name : "Salada ainda não selecionada"}
        </Description>
      </Container>
      <Footer onClick={() => navigate("/Homepage")}>
        Voltar para as opções
      </Footer>
      <Footer onClick={() => FinalizeOrder()}>Finalizar o pedido</Footer>
    </MaxContainer>
  );
}

const MaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: ${Color2};
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  height: 58vh;
  border-radius: 10px;

  h1 {
    text-align: left;
    padding-left: 10px;
    padding-top: 10px;
    color: ${Color4};
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 30px;
    font-weight: 700;
  }
`;

const Description = styled.div`
  width: 80vw;
  max-width: 400px;
  display: flex;
  /* justify-content: center; */
  padding-left: 10px;
  align-items: center;

  font-family: "Dancing Script", cursive;
  font-style: normal;
  font-size: 23px;
  font-weight: 700;

  margin-bottom: 8vh;

  color: ${(props) => (props.item ? Color3 : Color5)};
`;
