import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const Navigation = () => {
  return (
    <div className="flex justify-between px-10 h-16 bg-pink-50">
      <div className="flex items-center gap-4 cursor-pointer hover:scale-110">
        <img src="./logo.png" alt="logo" />
        <h1 className="text-3xl font-bold text-[#2a2525]">Furniro</h1>
      </div>

      <div className="flex items-center gap-5 text-lg">
        <span className="cursor-pointer hover:scale-110 group">
          Home
          <div className="bg-pink-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </span>
        <span className="cursor-pointer hover:scale-110 group">
          Shop
          <div className="bg-pink-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </span>
        <span className="cursor-pointer hover:scale-110 group">
          About
          <div className="bg-pink-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </span>
        <span className="cursor-pointer hover:scale-110 group">
          Contact
          <div className="bg-pink-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <CgProfile size={30} className="cursor-pointer hover:scale-110" />
        <CiSearch size={30} className="cursor-pointer hover:scale-110" />
        <CiHeart size={30} className="cursor-pointer hover:scale-110" />
        <CiShoppingCart size={30} className="cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default Navigation;
