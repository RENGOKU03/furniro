import React from "react";

const CartItems = () => {
  return (
    <div className="flex gap-10 ">
      <div className="w-2/3 py-5">
        <div className="grid grid-cols-4 gap-20 bg-pink-100  ml-auto px-10 ">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div className="grid grid-cols-4 gap-20  items-center  ml-auto px-10 py-5">
          <div className="flex gap-2  overflow-hidden items-center">
            <img src="./schoolbag.jpeg" className="w-1/3" alt="" />
            <span>Asgaard Sofa</span>
          </div>
          <span> Rs. 24000</span>
          <span>1</span>
          <span>Rs. 24000</span>
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
