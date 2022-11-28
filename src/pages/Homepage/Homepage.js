import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CardCarb from "./CardCarb.js";
import CardProtein from "./CardProtein.js";
import CardSalad from "./CardSalad.js";
import Header from "../../components/Header.js";
import { Color2 } from "../../assets/styles.js";

export default function Homepage({
  selected,
  setSelected,
  products,
  setProducts,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`https://ifit-ecommerce.onrender.com/products`, config)
      .then((res) => {
        setProducts(res.data);
      })
      .catch();
  }, []);

  return (
    <MaxContainer>
      <Header />
      <Container>
        <h1>Selecione um item de cada para colocar na sua marmita!</h1>
        <Options>
          <h2>Carboidratos</h2>
          <Cards>
            <CardCarb
              products={products}
              selected={selected}
              setSelected={setSelected}
            />
          </Cards>
        </Options>
        <Options>
          <h2>Proteínas</h2>
          <Cards>
            <CardProtein
              products={products}
              selected={selected}
              setSelected={setSelected}
            />
          </Cards>
        </Options>
        <Options>
          <h2>Saladas</h2>
          <Cards>
            <CardSalad
              products={products}
              selected={selected}
              setSelected={setSelected}
            />
          </Cards>
        </Options>
      </Container>
      <Footer onClick={() => navigate("/Cart")}>Ver o carrinho</Footer>
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
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;

  border-radius: 20px;

  h1 {
    font-family: "Raleway", sans-serif;
    color: ${Color2};
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const Options = styled.div`
  background-color: ${Color2};
  border-radius: 10px;
  width: 100vw;
  max-width: 400px;
  margin-top: 5px;
  h2 {
    display: flex;
    margin-left: 15px;
    font-size: 25px;
  }
  overflow-x: scroll;
`;

const Cards = styled.div`
  height: 20vh;
  max-height: 120px;
  overflow: scroll;
  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;

const Footer = styled.button`
  width: 80vw;
  max-width: 400px;
  height: 5vh;
  margin-top: 10%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
