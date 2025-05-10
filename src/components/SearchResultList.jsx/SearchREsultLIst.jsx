// src/components/SearchResultList.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from './Search.module.css'
const SearchResultList = ({ data = [], searchTerm = "" }) => {
  const filteredData = data.products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={style.title}>
      <h3>Maxsulot turlari</h3>
      <ul className={style.categoryList}>
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <div className={style.categoryItem}  key={product.id}>
              <Link to={`/maxsulot/${product.id}`} className={style.cart}>
                <img className={style.image} src={product.thumbnail} alt="" />
              </Link>
              <h3>{product.title}</h3>
              <div className={style.productPrice}>
                <h4>{product.price} so'm</h4>
                <button>
                  <i
                    className="fa-solid fa-plus fa-lg"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
              </div>

            </div>
          ))
        ) : (
          <div className={style.topilmadi}>
            <div className={style.topilmadiBg}>
                <h1>404 not found</h1>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
  
}

export default SearchResultList;
 