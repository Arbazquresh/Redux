import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { AddProduct } from "./AddProduct";
import { ProductList } from "./ProductList";
import { Products } from "./Products";
import { ProductDetails } from "./ProductDetails";
import { Cart } from "./Cart";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addprod" element={<AddProduct />} />
        <Route path="addproduct" element={<Products />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="productdetails" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
