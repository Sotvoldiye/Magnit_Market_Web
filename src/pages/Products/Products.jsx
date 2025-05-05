import React from "react";
import ProductList from "../ProductList/ProductList";
import { useGetAllProductsQuery } from "../../lib/api/productApi";
import style from "./Product.module.css";
import BestSelling from "../Product_Best_Selling/BestSelling";
function Products() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (error) {
    return (
      <div className="w-full text-center text-3xl font-bold text-red-500 opacity-90 py-10">
        <i className="fa fa-bug"></i> Something went wrong, please try again.
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="w-full py-10 text-center text-3xl font-bold opacity-90">
        <i className="fa fa-circle-notch fa-spin"></i>
      </div>
    );
  }

  const { products } = data;

  return (
    <div className={style.grid_cotainer}>
      {products.map((product) => (
       
          <ProductList product={product} key={product.id} />
        
      ))}
    </div>
  );
}

export default Products;
