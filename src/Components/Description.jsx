import React from "react";

const Description = () => {
  return (
    <div className="flex gap-10 h-[70vh] mt-10">
      <div className="w-1/2 flex justify-center ">
        <img src="./schoolbag.jpeg" className="w-1/2 " alt="" />
      </div>
      <div className="flex flex-col justify-center gap-5 w-1/2">
        <h1 className="text-4xl font-bold">Asgaard Sofa</h1>
        <p className="text-[#363636]">Rs. 240000</p>
        <p className="text-[#6e6d6d]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          corporis quaerat? Explicabo exercitationem hic, nemo recusandae quod
          dolore quam fuga eius illum sint doloribus assumenda tempora id! Quam
          dolorem unde quia error soluta in culpa, sapiente tempore nemo
          incidunt nihil!
        </p>
        <button className="hover:bg-[#ffafaf] border-2 border-black hover:border-[#ffafaf] text-black px-5 w-52 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Description;
