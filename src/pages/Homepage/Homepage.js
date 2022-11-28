import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CardCarb from "./CardCarb.js";
import CardProtein from "./CardProtein.js";
import CardSalad from "./CardSalad.js";
import Header from "../../components/Header.js";
import { Color2 } from "../../assets/Colors.js";
import { Footer, Message } from "../../components/Styled.js";

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
        <Message>
          Selecione um item de cada para colocar na sua marmita!
        </Message>
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
`;

const Options = styled.div`
  background-color: ${Color2};
  border-radius: 10px;
  width: 100vw;
  max-width: 400px;
  margin-bottom: 5px;
  h2 {
    display: flex;
    margin-left: 15px;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 700;
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
