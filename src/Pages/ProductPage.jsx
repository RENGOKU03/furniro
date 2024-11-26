import React, { useEffect, useState } from "react";
import Description from "../Components/Description";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const id = useParams();
  const [product, setProduct] = useState([]);
  async function fetchData() {
    const response = await fetch(`https://fakestoreapi.com/products/${id.id}`);
    const data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navigation />
      <Description product={product} />
      <Footer />
    </div>
  );
};

export default ProductPage;
