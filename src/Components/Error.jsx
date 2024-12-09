
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-7xl font-bold ">404</h1>
      <h1 className="font-bold text-4xl">Page Not Found</h1>
      <Link to={"/"}>
        <button className="bg-pink-500 px-5 py-2 rounded-lg text-white text-4xl hover:bg-white hover:text-pink-500 border-2 border-pink-500 hover:scale-110">
          Back To Furniro
        </button>
      </Link>
    </div>
  );
};

export default Error;
