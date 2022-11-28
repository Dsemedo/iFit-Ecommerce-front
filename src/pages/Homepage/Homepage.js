import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CardCarb from "./CardCarb.js";
import CardProtein from "./CardProtein.js";
import CardSalad from "./CardSalad.js";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);

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
    <>
      <Header>
        <h1>iFit</h1>
        <h2>a marmita fitness do momento</h2>
      </Header>
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
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 15vh;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;

  overflow-x: scroll;
  overflow: scroll;

  h1 {
    font-size: 14px;
    height: 25px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const Options = styled.div`
  width: 100vw;
  height: 20vh;
  margin-top: 5px;
  h2 {
    font-size: 25px;
  }
`;

const Cards = styled.div`
  overflow: scroll;
  overflow-x: scroll;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
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
