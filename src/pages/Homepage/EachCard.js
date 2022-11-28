import styled from "styled-components";
import React, { useState } from "react";

export default function EachCard({
  product,
  setSelected,
  selected,
  chosen,
  setChosen,
}) {
  const [optionChoosen, setOptionChoosen] = useState(false);

  function productSelected() {
    if (optionChoosen === false && chosen === 0) {
      setOptionChoosen(true);
      setChosen(chosen + 1);
      setSelected([...selected, product.name]);
    }
    if (optionChoosen === true && chosen === 1) {
      setOptionChoosen(false);
      setChosen(chosen - 1);

      setSelected(selected.filter((e) => e !== product.name));
    }
  }

  return (
    <>
      <Product optionChoosen={optionChoosen} onClick={() => productSelected()}>
        <img alt="foto do produto" src={product.image} />
        <h3>{product.name}</h3>
      </Product>
    </>
  );
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
  border: ${(props) => (props.optionChoosen ? "5px solid green" : "none")};
  box-sizing: border-box;

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
