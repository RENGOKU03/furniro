import React from "react";

const Product = () => {
  return (
    <div className="bg-gray-200 rounded-xl">
      <img src="./schoolbag.jpeg" alt="" />
      <p className="font-bold text-lg text-[#333333] pl-2">Syltherine</p>
      <p className="text-sm text-[#6e6d6d] pl-2">Stylish cafe chair</p>
      <span className="text-sm text-white bg-red-400 rounded-full p-2 relative bottom-80 left-5">
        -40%
      </span>
      <div className="flex gap-4">
        <span className="font-bold text-lg text-[#333333] pl-2">Rs. 5000</span>
        <span className="text-lg text-[#757575] line-through">Rs. 23000</span>
      </div>
    </div>
  );
};

export default Product;
