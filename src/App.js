import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles.js";
import Homepage from "./pages/Homepage/Homepage.js";
import Cart from "./pages/Cart/Cart.js";
import Checkout from "./pages/Checkout/Checkout.js";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
