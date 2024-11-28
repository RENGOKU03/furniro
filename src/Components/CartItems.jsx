import React from "react";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="flex gap-10 ">
      <div className="w-2/3 py-5">
        <div className="flex  bg-pink-100  ml-auto px-10 ">
          <p className="w-96">Product</p>
          <p className="w-20">Price</p>
          <p className="w-20"> Quantity</p>
          <p className="w-20">Subtotal</p>
        </div>
        <div className="flex ml-auto px-10 py-5">
          {cart.map((item) => (
            <>
              <div className="flex gap-2 w-96 overflow-hidden items-center">
                <img src={item.image} className="w-1/3" alt="" />
                <span>{item.title}</span>
              </div>
              <p className="w-20">{item.price}</p>
              <p className="w-20">1</p>
              <p className="w-20">Rs. 24000</p>
            </>
          ))}
        </div>
        <hr />
      </div>

      <div className="w-1/3 flex flex-col items-center pt-5">
        <p className="font-bold text-3xl ">Cart Totals</p>
        <div className="flex justify-center gap-20 py-10 text-lg">
          <span>Total</span>
          <span>20000</span>
        </div>

        <button className="hover:bg-[#70fc6b] border-2 border-black hover:border-[#70fc6b] text-black px-5 py-2 rounded-lg ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
