import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useGetAllProductsQuery, useAddToCartMutation, useRemoveFromCartMutation } from "../../lib/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from "../../lib/slice/Slice";
import style from "../../components/SearchResultList.jsx/resultProduct/ResProduct.module.css";

function CategoryList() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const items = useSelector((state) => state.cart?.items || []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredProducts = data.products.filter((p) => p.category === slug);

  return (
    <div>
     <div className={style.catergoryListNav}>
     <NavLink style={{padding:'10px, 15px', backgroundColor:'rgb(228, 83, 83)', borderRadius:'3px'}} to='/maxsulot-turi'>
      <i className="fa-solid fa-arrow-left"></i>
      </NavLink>
      <h1>{slug.toUpperCase()}</h1>
     </div>
      <div className={style.categoryList}>
        {filteredProducts.map((product) => {
          const isInCart = items.some((item) => item.id === product.id);

          const handleAdd = async () => {
            try {
              await addToCart(product).unwrap();
              dispatch(addToCartAction(product));
            } catch (err) {
              console.error("Add to cart failed", err);
            }
          };

          const handleRemove = async () => {
            try {
              await removeFromCart(product.id).unwrap();
              dispatch(removeFromCartAction(product));
            } catch (err) {
              console.error("Remove from cart failed", err);
            }
          };

          return (
            <div key={product.id} className={style.categoryItem}>
              <Link to={`/maxsulot/${product.id}`} className={style.cart}>
                <img className={style.image} src={product.thumbnail} alt={product.title} />
              </Link>
              <h3>{product.title}</h3>
              <div className={style.productPrice}>
                <h4>{product.price} so'm</h4>
                {isInCart ? (
                  <button className={style.button} onClick={handleRemove}>
                    <i className="fa-solid fa-minus fa-lg" style={{ color: "#ffffff" }}></i>
                  </button>
                ) : (
                  <button className={style.button} onClick={handleAdd}>
                    <i className="fa-solid fa-plus fa-lg" style={{ color: "#ffffff" }}></i>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
