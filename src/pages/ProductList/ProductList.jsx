import { Link } from "react-router-dom";
import style from "./ProductList.module.css";
function ProductList({ product }) {
  return (
    <div>
        <Link to={`/maxsulot/:${product.id}`} className={style.cart}>
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
  );
}

export default ProductList;
