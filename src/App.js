import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Products/Product/Product";
import ProductDetails from "./components/Products/Product/ProductDetails";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Category from "./components/Home/Category/Category";
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
