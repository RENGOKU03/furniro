import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/Slice";

const Description = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };
  return (
    <div className="md:flex gap-10 md:h-[70vh] ">
      <div className="md:w-1/2 flex justify-center h-3/5 lg:h-4/5 my-auto">
        <img src={product?.image} alt={product.title} />
      </div>
      <div className="flex flex-col justify-center gap-5 md:w-1/2 px-2">
        <h1 className="md:text-4xl text-xl font-bold">{product?.title}</h1>
        <p className="text-[#363636] text-xl ">{`$ ` + product?.price}</p>

        <p>
          {product?.rating?.rate} ({product?.rating?.count})
        </p>
        <p className="text-[#6e6d6d]">{product?.description}</p>
        <button
          className="hover:bg-[#ffafaf] border-2 border-black hover:border-[#ffafaf] text-black px-5 w-52 py-2 mx-auto rounded-lg"
          onClick={() => handleAddToCart(product)}
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Description;
