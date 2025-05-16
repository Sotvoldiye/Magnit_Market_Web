import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorute, removeFavorute } from '../../lib/slice/Slice';
import style from './Favoruite.module.css'
function Favorute() {
  const dispatch = useDispatch();

  // Sevimlilar ro'yxatini olish
  const favoruteItems = useSelector((state) => state.favorute.items);

  const handleAddToFavorute = (product) => {
    dispatch(addFavorute(product));  // Mahsulotni sevimlilar ro'yxatiga qo'shish
  };

  const handleRemoveFromFavorute = (product) => {
    dispatch(removeFavorute(product));  // Mahsulotni sevimlilar ro'yxatidan olib tashlash
  };

  return (
    <div className={style.favoruteContainer}>
      <h2>Sevimli Mahsulotlar</h2>
      {favoruteItems.length === 0 ? (
        <p>Sevimli mahsulotlar mavjud emas</p>
      ) : (
        <div className={style.favoruteList}>
          {favoruteItems.map((item) => (
            <div key={item.id} className={style.favoruteItem}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={style.favoruteImage}
              />
            <div className={style.price_descript}>
            <h3>{item.title.split(" ").slice(0, 2).join(" ")}</h3>
            <p>{item.price} so'm</p>
            </div>
              <button
                onClick={() => handleRemoveFromFavorute(item)}
                className={style.removeBtn}
              >
                <i className="fa-solid fa-heart-broken"></i> O'chirish
              </button>
              <button className={style.removeBtn}>+ Savat</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default Favorute