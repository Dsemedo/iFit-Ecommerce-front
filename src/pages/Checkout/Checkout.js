import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header.js";
import { Footer, Message } from "../../components/Styled.js";
import { Color1, Color2, Color3, Color4 } from "../../assets/Colors.js";
import BackButtonRed from "../../assets/Images/BackLogo.svg";

export default function Cart({ selected, products }) {
  const navigate = useNavigate();

  const [screen, setScreen] = useState(false);

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

  useEffect(() => {
    if (
      Object.keys(carbo).length === 0 ||
      Object.keys(prot).length === 0 ||
      Object.keys(salad).length === 0
    ) {
      navigate("/Homepage");
    }
  }, []);

  function BackButton() {
    setScreen(!screen);
  }

  return (
    <>
      <Header />
      <Container>
        <Message>Confira seu pedido!</Message>
        <CheckoutItems>
          <EachItem>
            <h1>Tipo</h1>
            <h2>Descrição</h2>
          </EachItem>
          <EachItem>
            <h3>Carboidrado</h3>
            <h4>{carbo.description}</h4>
          </EachItem>
          <EachItem>
            <h3>Proteína</h3>
            <h4>{prot.description}</h4>
          </EachItem>
          <EachItem>
            <h3>Salada</h3>
            <h4>{salad.description}</h4>
          </EachItem>
        </CheckoutItems>
        <Footer onClick={() => navigate("/Homepage")}>
          Voltar para as opções
        </Footer>
        <Footer onClick={() => BackButton()}>Histórico de pedidos</Footer>
        <Footer onClick={() => BackButton()}>Confirmar pedido</Footer>
      </Container>
      <BlackScreen screen={screen}>
        <WhiteScreen>
          <img
            src={BackButtonRed}
            alt="BackButtonRed"
            onClick={() => BackButton()}
          />
        </WhiteScreen>
      </BlackScreen>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutItems = styled.div`
  background-color: white;
  width: 80vw;
  max-width: 400px;
  height: 50vh;
  border: none;
  border-radius: 10px;
`;

const EachItem = styled.div`
  display: flex;
  margin-bottom: 5vh;

  p {
    width: 40vw;
    max-width: 250px;
    display: flex;
  }

  h1,
  h2 {
    text-align: left;
    padding-top: 10px;
    color: ${Color4};
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 3vh;
    width: 35%;
    margin-left: 5%;
    word-wrap: break-word;
  }

  h3,
  h4 {
    font-family: "Dancing Script", cursive;
    font-style: normal;
    font-size: 20px;
    font-weight: 700;
    width: 35%;
    margin-left: 5%;
    word-wrap: break-word;
    color: ${Color3};
  }

  h2,
  h4 {
    width: 55%;
  }
`;

const BlackScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.7);
  display: ${(props) => (props.screen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const WhiteScreen = styled.div`
  width: 80vw;
  max-width: 400px;
  height: 80vh;
  background-color: ${Color2};
  border-radius: 50px;
  position: relative;

  img {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
  }
`;
