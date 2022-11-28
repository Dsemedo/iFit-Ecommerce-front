import EachCard from "./EachCard.js";
import React, { useState } from "react";

export default function CardCarb({ products, setSelected, selected }) {
  const [chosen, setChosen] = useState(0);

  return products.map((product) => {
    return product.category === "salada" ? (
      <EachCard
        product={product}
        setSelected={setSelected}
        selected={selected}
        chosen={chosen}
        setChosen={setChosen}
      />
    ) : (
      <></>
    );
  });
}
