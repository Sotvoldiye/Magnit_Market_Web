import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsByIdQuery } from '../../lib/api/productApi';
import { decrement, increment } from '../../lib/slice/userSlice';
import { useParams } from 'react-router-dom';
import style from './Cart.module.css'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
    
    console.log(cartItems)
    useEffect(() => {
      if (cartItems && cartItems.stock !== undefined) {
        dispatch(setStock(cartItems.stock));
      }
    }, [cartItems, dispatch]);
    
  return (
    <div>
      <h2>Savatdagi mahsulotlar</h2>

      {cartItems.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src="/path/to/default-image.jpg"  // Placeholder image
                  alt="No Image"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              )}

              <h3>{item.title}</h3>
              <p>Narxi: ${item.price}</p>
              <p>Miqdori: {item.quantity || 1}</p>
                      <div>
                        <div className={style.buttons}>
                          <button onClick={()=> dispatch(decrement())}>
                            <i
                              className="fa-solid fa-minus "
                              style={{ color: "#b3b3b3" }}
                            ></i>
                          </button>
                          <p className={style.amount}>{count}</p>
                          <button onClick={()=> dispatch(increment())}>
                            <i className="fa-solid fa-plus" style={{ color: "#53B175" }}></i>
                          </button>
                        </div>
                      </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
