import React from "react";
import Product from "../Components/Product";
import FoorBanner from "../Components/FoorBanner";

const Shop = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <FoorBanner />
    </div>
  );
};

export default Shop;
