import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Header } from "./Header";
import { Product } from "./Product";
import { Home } from "./Home";
import { About } from "./About";
import { Cart } from "./Cart";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Product cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;