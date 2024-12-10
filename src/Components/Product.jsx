import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Link to={`/product/${item?.id}`}>
      <div className="bg-gray-200 rounded-xl cursor-pointer w-11/12 mx-auto overflow-hidden mt-3">
        <div className="h-56 overflow-hidden flex justify-center bg-white group hover:scale-105 transition-all duration-300">
          <img src={item?.image} alt={item?.title} />
        </div>
        <p className="font-bold text-lg text-[#333333] pl-2 overflow-hidden truncate">
          {item?.title}
        </p>
        <p className="text-sm  text-[#6e6d6d] pl-2 truncate">
          {item.description}
        </p>
        <div className="flex gap-4">
          <span className="font-bold text-lg text-[#333333] pl-2">
            {item?.price}
          </span>
          <span className="text-lg text-[#757575] line-through">Rs. 23000</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
