import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 border-t-2 border-[#6e6d6d] mt-10 bg-pink-50">
        <div className="flex gap-5 flex-col justify-center items-start pl-20 pt-5">
          <span className="font-bold text-xl">Furniro.</span>
          <span>400, university Drive Suite 200 coral Gables. Fl32114 USA</span>
        </div>

        <div className="flex gap-2 flex-col pt-5 text-lg ">
          <span className="text-[#686767] ">Links</span>
          <Link to={"/"}>
            <span className="cursor-pointer hover:text-[#a1a1a1]">Shop</span>
          </Link>
          <Link to={"/contactus"}>
            <span className="cursor-pointer hover:text-[#a1a1a1]">Contact</span>
          </Link>
        </div>
      </div>
      <p className="text-[#686767] pl-20 pt-5 pb-4 border-t-2 border-[#6e6d6d] bg-yellow-50">
        2024 Furniro. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
