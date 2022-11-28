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

  function FinalizeOrder() {
    // navigate("/Checkout");
    if (
      carbo.name === undefined ||
      prot.name === undefined ||
      salad.name === undefined
    ) {
      return alert(
        "Por favor meu anjo, selecionae pelo menos um item de cada tipo!"
      );
    }

    navigate("/checkout");
  }

  // useEffect(() => {
  //   if (selected.includes(products.name)) {
  //     console.log("Entrei Aqui");
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Container>
        <Description item={carbo.name}>
          {carbo.name ? carbo.name : "Carboidrado ainda não selecionado"}
        </Description>
        <Description item={prot.name}>
          {prot.name ? prot.name : "Proteína ainda não selecionado"}
        </Description>
        <Description item={salad.name}>
          {salad.name ? salad.name : "Salada ainda não selecionado"}
        </Description>
      </Container>
      <Footer onClick={() => navigate("/Homepage")}>
        Voltar para as opções
      </Footer>
      <Footer onClick={() => FinalizeOrder()}>Finalizar o pedido</Footer>
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
  width: 80vw;
  max-width: 400px;

  height: 3vh;
  max-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5vh;

  background-color: ${(props) => (props.item ? "white" : "yellow")};
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
