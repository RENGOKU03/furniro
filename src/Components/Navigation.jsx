import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import NavMobile from "./NavMobile.jsx";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="flex justify-between items-center px-10 h-16 bg-pink-50">
        <Link to={"/"} className="flex items-center">
          <div className="flex  gap-4 cursor-pointer hover:scale-110 ">
            <img src="../logo.png" alt="logo" />
            <h1 className="text-3xl font-bold text-[#2a2525]">Furniro</h1>
          </div>
        </Link>
        <div className="cursor-pointer md:hidden">
          {isOpen ? (
            <MdOutlineCancel size={30} onClick={() => setIsOpen(false)} />
          ) : (
            <IoMdMenu size={30} onClick={() => setIsOpen(true)} />
          )}
        </div>
        <div className="items-center gap-5 text-lg hidden md:flex">
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

        <div className="items-center gap-4 hidden md:flex ">
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
      {isOpen && <NavMobile cart={cart} />}
    </>
  );
};

export default Navigation;
