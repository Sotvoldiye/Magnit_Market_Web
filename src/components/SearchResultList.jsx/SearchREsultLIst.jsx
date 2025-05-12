// src/components/SearchResultList.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../lib/slice/userSlice";

const SearchResultList = ({ data = [], searchTerm = "" }) => {
  const filteredData = data.products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();

  // To‘g‘ri nom bilan va fallback (agar state.cart yo‘q bo‘lsa)
  const items = useSelector((state) => state.cart?.items || []);

  const handleAdd = (data) => {
    dispatch(addToCart(data));
  };

  const handleRemove = (data) => {
    dispatch(removeFromCart(data));
  };

  return (
    <div className={style.title}>
      <h3>Maxsulot turlari</h3>

      <ul className={style.categoryList}>
        {filteredData.length > 0 ? (
          filteredData.map((product) => {
            const isInCart = items.some((item) => item.id === product.id);

            return (
              <div className={style.categoryItem} key={product.id}>
                <Link to={`/maxsulot/${product.id}`} className={style.cart}>
                  <img
                    className={style.image}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </Link>
                <h3>{product.title}</h3>
                <div className={style.productPrice}>
                  <h4>{product.price} so'm</h4>
                  {isInCart ? (
                    <button onClick={() => handleRemove(product)}>
                      <i
                        className="fa-solid fa-minus fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </button>
                  ) : (
                    <button onClick={() => handleAdd(product)}>
                      <i
                        className="fa-solid fa-plus fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })
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
};

export default SearchResultList;
