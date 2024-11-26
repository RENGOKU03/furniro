import React from "react";

const Description = ({ product }) => {
  console.log(product);

  return (
    <div className="flex gap-10 h-[70vh] mt-10">
      <div className="w-1/2 flex justify-center ">
        <img src={product.image} className="w-1/2 " alt="" />
      </div>
      <div className="flex flex-col justify-center gap-5 w-1/2">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-[#363636] text-xl ">{`$ ` + product.price}</p>

        <p>
          {product.rating.rate} ({product.rating.count})
        </p>
        <p className="text-[#6e6d6d]">{product.description}</p>
        <button className="hover:bg-[#ffafaf] border-2 border-black hover:border-[#ffafaf] text-black px-5 w-52 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Description;
