import React from 'react';
import style from './ResProduct.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAddToCartMutation, useRemoveFromCartMutation } from '../../../lib/api/productApi';
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from '../../../lib/slice/Slice';

function ResProduct({ product }) {
  const dispatch = useDispatch();
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const items = useSelector((state) => state.cart?.items || []);
  const isInCart = items.some((item) => item.id === product.id);

  const handleAdd = async () => {
    try {
      await addToCart(product).unwrap();
      dispatch(addToCartAction(product));
    } catch (err) {
      console.error('Add to cart failed', err);
    }
  };

  const handleRemove = async () => {
    try {
      await removeFromCart(product.id).unwrap();
      dispatch(removeFromCartAction(product));
    } catch (err) {
      console.error('Remove from cart failed', err);
    }
  };

  return (
    <div className={style.categoryItem}>
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
}

export default ResProduct;
