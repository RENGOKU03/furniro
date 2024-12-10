import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Store/Slice";

const CartItems = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const handleDeleteFromCart = (id) => {
    if (cart.some((item) => item.id === id)) {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <div className="flex gap-10 ">
      <div className="w-2/3 py-5">
        <div className="flex  bg-pink-100  ml-auto px-10 ">
          <p className="w-[500px]">Product</p>
          <p className="w-20">Price</p>
        </div>

        {cart.map((item) => (
          <>
            <div className="flex ml-auto px-10 py-5">
              <div className="flex gap-2 w-[500px]  overflow-hidden items-center">
                <img src={item.image} className="w-1/4" alt="" />
                <span>{item.title}</span>
              </div>
              <p className="w-20 my-auto">{"$ " + item.price}</p>
              <p
                className="w-20 my-auto mx-auto"
                onClick={() => {
                  handleDeleteFromCart(item.id);
                }}
              >
                <div className="cursor-pointer">
                  <MdDeleteOutline size={40} color="red" />
                </div>
              </p>
            </div>
          </>
        ))}

        <hr />
      </div>

      <div className="w-1/3 flex flex-col items-center pt-5">
        <p className="font-bold text-3xl ">Cart Totals</p>
        <div className="flex justify-center gap-20 py-10 text-lg">
          <span className="underline  ">Total</span>
          <span className="font-bold text-4xl">{totalPrice}</span>
        </div>

        <button className="hover:bg-[#70fc6b] border-2 border-black hover:border-[#70fc6b] text-black px-5 py-2 rounded-lg ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
