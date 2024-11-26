import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const string = item.description.slice(0, 50);
  return (
    <Link to={`/product/${item.id}`}>
      <div className="bg-gray-200 rounded-xl w-72 cursor-pointer">
        <div className="h-72 w-72 overflow-hidden flex justify-center bg-white">
          <img src={item.image} alt={item.title} />
        </div>
        <p className="font-bold text-lg text-[#333333] pl-2 overflow-hidden truncate">
          {item.title}
        </p>
        <p className="text-sm text-[#6e6d6d] pl-2">{string}</p>
        <div className="flex gap-4">
          <span className="font-bold text-lg text-[#333333] pl-2">
            {item.price}
          </span>
          <span className="text-lg text-[#757575] line-through">Rs. 23000</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
