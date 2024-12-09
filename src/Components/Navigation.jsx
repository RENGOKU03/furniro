import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
    const cart = useSelector((state) => state.cart.cart);
    return (
        <div className="flex justify-between px-10 h-16 bg-pink-50">
            <Link to={"/"} className="flex items-center">
                <div className="flex  gap-4 cursor-pointer hover:scale-110 ">
                    <img src="../logo.png" alt="logo" />
                    <h1 className="text-3xl font-bold text-[#2a2525]">Furniro</h1>
                </div>
            </Link>

            <div className="flex items-center gap-5 text-lg">
                <Link to={"/"}>
          <span className="cursor-pointer hover:scale-110 group">
            Home
            <div className="bg-pink-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </span>
                </Link>

                <Link to={"/contactus"}>
          <span className="cursor-pointer hover:scale-110 group">
            Contact
            <div className="bg-pink-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </span>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <CgProfile size={30} className="cursor-pointer hover:scale-110" />
                <CiSearch size={30} className="cursor-pointer hover:scale-110" />
                <CiHeart size={30} className="cursor-pointer hover:scale-110" />
                <Link to={"/cart"}>
                    <CiShoppingCart
                        size={30}
                        className="cursor-pointer hover:scale-110"
                    />
                    {cart && cart.length > 0 && (
                        <span className="absolute top-8 right-5 text-sm bg-pink-500 text-white rounded-full px-2">
              {cart.length}
            </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
