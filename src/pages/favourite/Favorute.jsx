import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorute,
  addToCart as addToCartAction,
  removeFavorute,
  removeFromCart as removeFromCartAction
} from '../../lib/slice/Slice';
import style from './Favoruite.module.css';
import { useAddToCartMutation, useRemoveFromCartMutation } from '../../lib/api/productApi';

function Favorute() {
  const dispatch = useDispatch();
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const favoruteItems = useSelector((state) => state.favorute.items || []);
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleAddToFavorute = (product) => {
    dispatch(addFavorute(product));
  };

  const handleRemoveFromFavorute = (product) => {
    dispatch(removeFavorute(product));
  };

  const handleAdd = async (item) => {
    try {
      await addToCart(item).unwrap();
      dispatch(addToCartAction(item));
    } catch (err) {
      console.error('Add to cart failed', err);
    }
  };

  const handleRemove = async (item) => {
    try {
      await removeFromCart(item.id).unwrap();
      dispatch(removeFromCartAction(item));
    } catch (err) {
      console.error('Remove from cart failed', err);
    }
  };

  return (
    <div className={style.favoruteContainer}>
      <h2>Sevimli Mahsulotlar</h2>
      {favoruteItems.length === 0 ? (
        <p>Sevimli mahsulotlar mavjud emas</p>
      ) : (
        <div className={style.favoruteList}>
          {favoruteItems.map((item) => {
            const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

            return (
              <div key={item.id} className={style.favoruteItem}>
                <img
                  src={item.thumbnail}
                  alt={item.title || 'Mahsulot'}
                  className={style.favoruteImage}
                />
                <div className={style.price_descript}>
                  <h3>{item?.title ? item.title.split(" ").slice(0, 2).join(" ") : "Nomaʼlum mahsulot"}</h3>
                  <p>{item.price} so'm</p>
                </div>
                <button
                  onClick={() => handleRemoveFromFavorute(item)}
                  className={style.removeBtn}
                >
                  <i className="fa-solid fa-heart-broken"></i>
                </button>
                {isInCart ? (
                  <button onClick={() => handleRemove(item)} className={style.removeBtn2}>
                    <p className={style.removeBtn_p} style={{ fontSize: '36px' }}>-</p>
                  </button>
                ) : (
                  <button onClick={() => handleAdd(item)} className={style.removeBtn2}>
                    <p className={style.removeBtn_p} style={{ fontSize: '36px' }}>+</p>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Favorute;
