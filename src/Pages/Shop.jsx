import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import FootBanner from "../Components/FootBanner";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const Shop = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navigation />
      <div className="grid space-x-3  grid-cols-1 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 ">
        {data &&
          data.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
      </div>
      <FootBanner />
      <Footer />
    </>
  );
};

export default Shop;
