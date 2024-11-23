import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const Navigation = () => {
  return (
    <div className="flex justify-between px-10">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" />
        <h1>Furniro</h1>
      </div>

      <div className="flex items-center gap-4">
        <span>Home</span>
        <span>Shop</span>
        <span>About</span>
        <span>Contact</span>
      </div>

      <div className="flex items-center gap-4">
        <CgProfile />
        <CiSearch />
        <CiHeart />
        <CiShoppingCart />
      </div>
    </div>
  );
};

export default Navigation;
