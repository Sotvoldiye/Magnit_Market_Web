import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../lib/api/productApi";
import style from "./Product.module.css";
import HeartIcon from "../../components/HeartIcon/HeartIcon";
import Accordion from "../../components/Accordion/Accordion";
import {
  decrement,
  increment,
  setStock,
} from "../../lib/slice/Slice";
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsByIdQuery(id);
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.products[id]?.count || 0);
  const stock = useSelector((state) => state.counter.products[id]?.stock || 0);

  useEffect(() => {
    if (data && data.stock !== undefined) {
      dispatch(setStock({ id: data.id, stock: data.stock }));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Product not found</p>;

  return (
    <div className={style.productContainer}>
      <div className={style.productImg}>
        <img className={style.productImage} src={data.thumbnail} alt={data.title} />
        <NavLink className={style.link} to="/">
          <i className={"fa-solid fa-arrow-left"}></i>
        </NavLink>
      </div>

      <div className={style.productDescription}>
        <div className={style.product_title}>
          <h3>{data.title}</h3>
          <HeartIcon product={data} />
        </div>

        <div className={style.price}>
          <div className={style.buttons}>
            <button onClick={() => dispatch(decrement(data.id))} disabled={count <= 0}>
              <i className="fa-solid fa-minus" style={{ color: "#b3b3b3" }}></i>
            </button>

            <p className={style.amount}>{count}</p>

            <button onClick={() => dispatch(increment(data.id))} disabled={count >= stock}>
              <i className="fa-solid fa-plus" style={{ color: "#53B175" }}></i>
            </button>
          </div>
          <p>{data.price} so'm</p>
        </div>

        <Accordion data={data} />
      </div>
    </div>
  );
}

export default Product;
