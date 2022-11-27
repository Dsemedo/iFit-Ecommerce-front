import styled from "styled-components";
import React from "react";

export default function CardCarb({ products, setSelecionado, selecionado }) {
  function productSelected(product) {
    if (selecionado.includes(product.name)) {
    }
    setSelecionado([...selecionado, product.name]);
  }
  return products.map((product) => {
    if (product.category === "proteina") {
      return (
        <Product onClick={() => productSelected(product)}>
          <img alt="foto do produto" src={product.image} />
          <h3>{product.name}</h3>
        </Product>
      );
    }
  });
}

const Product = styled.div`
  width: 100px;
  height: 95%;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  vertical-align: center;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }

  h3 {
    margin-top: 5%;
    font-size: 13px;
    height: 30%;
    justify-content: center;
    align-items: center;
  }
`;
