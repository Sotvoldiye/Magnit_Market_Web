import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../lib/api/productApi";
import style from "./Category.module.css";
function CategoryList() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredProducts = data.products.filter((p) => p.category === slug);

  return (
    <div>
      <h1>{slug.toUpperCase(1)}</h1>
      <div className={style.productList}>
        {filteredProducts.map((s) => (
          <div key={s.id}>
            <Link to={`/maxsulot/:${s.id}`} className={style.cart}>
              <img className={style.image} src={s.thumbnail} alt="" />
            </Link>
            <h3>{s.title}</h3>
            <div className={style.productPrice}>
              <h4>{s.price} so'm</h4>
              <button>
                <i
                  className="fa-solid fa-plus fa-lg"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
