import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../lib/api/productApi";
import style from "./Product.module.css";
import HeartIcon from "../../components/HeartIcon/HeartIcon";
import Accordion from "../../components/Accordion/Accordion";

function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Product not found</p>;
  return (
    <div className={style.productContainer}>
      <div className={style.productImg}>
        <img className={style.productImage} src={data.thumbnail} alt="" />
        <NavLink className={style.link} to="/">
          <i className={"fa-solid fa-arrow-left"}></i>
        </NavLink>
      </div>
      <div className={style.productDescription}>
        <div className={style.product_title}>
          <h3>{data.title}</h3>
          <HeartIcon />
        </div>
        <div className={style.price}>
          <div className={style.buttons}>
            <button>
              <i
                className="fa-solid fa-minus "
                style={{ color: "#b3b3b3" }}
              ></i>
            </button>
            <p className={style.amount}>1</p>
            <button>
              <i className="fa-solid fa-plus" style={{ color: "#53B175" }}></i>
            </button>
          </div>
          <p>{data.price} so'm</p>{" "}
        </div>
        <Accordion data={data}/>
      </div>
    </div>
  );
}

export default Product;
