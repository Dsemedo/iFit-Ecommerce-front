import styled from "styled-components";
import React from "react";

export default function Card({ products }) {
  // eslint-disable-next-line array-callback-return
  return products.map((product) => {
    <h1>{product.name}</h1>;
  });
}

const Product = styled.div`
  width: 80px;
  height: 90px;
  background-color: yellow;
  margin-left: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    font-size: 12px;
  }
`;
