// src/components/SearchResultList.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../lib/slice/Slice";
import ResProduct from "./resultProduct/ResProduct";

const SearchResultList = ({ data = [], searchTerm = "" }) => {
  const filteredData = data.products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // To‘g‘ri nom bilan va fallback (agar state.cart yo‘q bo‘lsa)


  return (
    <div className={style.title}>
  <h3>Maxsulot turlari</h3>

  {filteredData.length > 0 ? (
    <ul className={style.categoryList}>
      {filteredData.map((product) => (
        <li key={product.id}>
          <ResProduct product={product} />
        </li>
      ))}
    </ul>
  ) : (
    <div className={style.topilmadi}>
      <div className={style.topilmadiBg}>
        <h1>404 not found</h1>
      </div>
    </div>
  )}
</div>

  );
};

export default SearchResultList;
