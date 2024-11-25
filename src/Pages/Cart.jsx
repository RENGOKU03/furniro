import React from "react";
import Navigation from "../Components/Navigation";
import Banner from "../Components/Banner";
import CartItems from "../Components/CartItems";

const Cart = () => {
  return (
    <>
      <Navigation />
      <Banner banner={"cartbanner.png"} />
      <CartItems />
    </>
  );
};

export default Cart;
