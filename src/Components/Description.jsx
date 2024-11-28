import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/Slice";

const Description = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product, "clickedddddd");
  };
  return (
    <div className="flex gap-10 h-[70vh] mt-10">
      <div className="w-1/2 flex justify-center ">
        <img src={product?.image} className="w-1/2 " alt="" />
      </div>
      <div className="flex flex-col justify-center gap-5 w-1/2">
        <h1 className="text-4xl font-bold">{product?.title}</h1>
        <p className="text-[#363636] text-xl ">{`$ ` + product?.price}</p>

        <p>
          {product?.rating?.rate} ({product?.rating?.count})
        </p>
        <p className="text-[#6e6d6d]">{product?.description}</p>
        <button
          className="hover:bg-[#ffafaf] border-2 border-black hover:border-[#ffafaf] text-black px-5 w-52 py-2 rounded-lg"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Description;
