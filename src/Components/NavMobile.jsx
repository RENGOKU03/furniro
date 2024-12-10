import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const NavMobile = ({ cart }) => {
  return (
    <div>
      <div className="items-center gap-2 text-lg flex flex-col justify-center bg-pink-50">
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

      <div className="items-center justify-center gap-4 flex bg-pink-50 py-2 relative">
        <CgProfile size={30} className="cursor-pointer hover:scale-110" />
        <CiSearch size={30} className="cursor-pointer hover:scale-110" />
        <CiHeart size={30} className="cursor-pointer hover:scale-110" />
        <Link to={"/cart"}>
          <CiShoppingCart
            size={30}
            className="cursor-pointer hover:scale-110 "
          />
          {cart && cart.length > 0 && (
            <span className="absolute text-sm bottom-6 right-56 bg-pink-500 text-white rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};
export default NavMobile;
