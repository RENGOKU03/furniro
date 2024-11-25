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
      <div className="grid grid-cols-4 px-10 gap-4 mt-10">
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <Product item={item} />
              </div>
            );
          })}
      </div>
      <FootBanner />
      <Footer />
    </>
  );
};

export default Shop;
