import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiCircleCheck, CiTrophy } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";

const FootBanner = () => {
  return (
    <div className="flex gap-10  justify-center bg-pink-50 p-10 mt-5">
      <div className="flex items-center gap-2">
        <CiTrophy size={40} />
        <div>
          <p className="font-semibold">Hight Quality</p>
          <p className="text-sm text-[#6e6d6d]">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <CiCircleCheck size={40} />
        <div>
          <p className="font-semibold">Wattanty Protection</p>
          <p className="text-sm text-[#6e6d6d]">Over 2 years</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <FaShippingFast size={40} />
        <div>
          <p className="font-semibold">Free Shipping</p>
          <p className="text-sm text-[#6e6d6d]">Order over $100</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BiSupport size={40} />
        <div>
          <p className="font-semibold">24/7 Customer Support</p>
          <p className="text-sm text-[#6e6d6d]">Dedicated Professionals</p>
        </div>
      </div>
    </div>
  );
};

export default FootBanner;
