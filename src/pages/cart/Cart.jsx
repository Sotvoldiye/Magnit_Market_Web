import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setStock,
  resetCounter,
  removeFromCart,
} from "../../lib/slice/Slice";
import style from "./Cart.module.css";
import Tolov from "../../components/PaynetModal/Tolov";
import { NavLink } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const productCounters = useSelector((state) => state.counter.products);
  const dispatch = useDispatch();

  // modal funksiyasi
  const [tolov, setTolov] = useState(false)

  useEffect(() => {
    cartItems.forEach((item) => {
      if (!productCounters[item.id]) {
        dispatch(setStock({ id: item.id, stock: item.stock }));
      }
    });
  }, [cartItems, dispatch]);

  // Umumiy narxni hisoblash
  const totalPrice = cartItems.reduce((sum, item) => {
    const count = productCounters[item.id]?.count || 0;
    const jami = item.price * count;
    return sum + jami;
  }, 0);

  return (
    <div>
      <h2>Savatdagi mahsulotlar</h2>

      {cartItems.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <div className={style.cartContainers}>
          <div className={style.cartConent}>
          {cartItems.map((item) => {
            const count = productCounters[item.id]?.count || 0;
            const jami = item.price * count;
            return (
              <div key={item.id} className={style.cartContainer}>
                <NavLink to={`/maxsulot/${item.id}`}>
                <img
                  src={item.thumbnail || "/no-image.jpg"}
                  alt={item.title}
                  className={style.cartImage}
                />
                </NavLink>

                <div className={style.CartCenter}>
                  <h3>{item.title.split(" ").slice(0, 2).join(" ")}</h3>
                  <p>Jami: {jami.toFixed(2)} so'm</p>

                  <div className={style.price}>
                    <div className={style.buttons}>
                      <button onClick={() => dispatch(decrement(item.id))}>
                        <i
                          className="fa-solid fa-minus"
                          style={{ color: "#b3b3b3" }}
                        ></i>
                      </button>
                      <p className={style.amount}>{count}</p>
                      <button onClick={() => dispatch(increment(item.id))}>
                        <i
                          className="fa-solid fa-plus"
                          style={{ color: "#53B175" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className={style.cartCloseCont}>
                  <button 
                  className={style.button}
                    style={{ marginTop: "0px" }}
                    onClick={() => {
                      dispatch(removeFromCart({ id: item.id }));
                      dispatch(resetCounter(item.id));
                    }}
                  >
                    <i
                      className="fa-solid fa-xmark fa-lg"
                      style={{ color: "rgb(108, 105, 105)" }}
                    ></i>
                  </button>
                  <p>{item.price}$</p>
                </div>
              </div>
            );
          })}
          <button onClick={()=>setTolov(!tolov)} className={style.sotibOlish}>
            <p>Sotib Olish</p>{" "}
            <span className={style.priceSpan}>
              {totalPrice.toFixed(2)} so'm
            </span>
          </button>
          </div>
        
          <div className={style.modals}>
          {tolov && (
  <div className={style.modalOverlay} onClick={() => setTolov(false)}>
    <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
      <Tolov jami={totalPrice}/>
    </div>
  </div>
)}

      </div>
        </div>
      )}


    </div>
  );
}

export default Cart;
