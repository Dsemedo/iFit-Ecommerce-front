import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles.js";
import Homepage from "./pages/Homepage/Homepage.js";
import Cart from "./pages/Cart/Cart.js";
import Login from "./pages/Auth/Login.js";
import Registration from "./pages/Auth/Registration.js";
import Checkout from "./pages/Checkout/Checkout.js";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route
          path="/homepage"
          element={
            <Homepage
              selected={selected}
              setSelected={setSelected}
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              selected={selected}
              setSelected={setSelected}
              products={products}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              selected={selected}
              setSelected={setSelected}
              products={products}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
