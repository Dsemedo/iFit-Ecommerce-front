import styled from "styled-components";
import React, { useState, useEffect } from "react";

export default function EachCard({
  product,
  setSelected,
  selected,
  chosen,
  setChosen,
}) {
  const [optionChoosen, setOptionChoosen] = useState(false);

  // if (selected.filter((e) => e !== product.name){
  //   console.log("product.name", product.name)
  // }

  useEffect(() => {
    if (selected.includes(product.name)) {
      setOptionChoosen(true);
      setChosen(chosen + 1);
    }
  }, []);

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
  width: 110px;
  height: 120px;
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  vertical-align: center;
  border: ${(props) =>
    props.optionChoosen ? "5px solid green" : "5px ridge transparent"};
  box-sizing: border-box;

  img {
    width: 100px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-family: "Raleway", sans-serif;
    color: black;
    font-style: normal;
    font-size: 12px;
    font-weight: 400;

    margin-top: 2%;
    height: 20%;
    justify-content: center;
    align-items: center;
  }
`;
