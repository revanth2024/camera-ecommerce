import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Product } from "./Product";
import { Home } from "./Home";
import { About } from "./About";
import { Cart } from "./Cart";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [cart, setCart] = React.useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header cart={cart}></Header>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/products"
              element={<Product cart={cart} setCart={setCart}></Product>}
            ></Route>
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart}></Cart>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
