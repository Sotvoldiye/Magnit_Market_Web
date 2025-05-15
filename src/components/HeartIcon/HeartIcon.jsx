import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorute, removeFavorute } from '../../lib/slice/Slice';

const HeartIcon = ({ product }) => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector((state) => state.favorute?.items || []);

  const isFavorute = favoriteItems.some((item) => item.id === product.id);

  const toggleFavorute = () => {
    if (isFavorute) {
      dispatch(removeFavorute({ id: product.id }));
    } else {
      dispatch(addFavorute(product));
    }
  };

  return (
    <button onClick={toggleFavorute} style={{ background: 'none', border: 'none' }}>
      <i
        className={`fa${isFavorute ? 's' : 'r'} fa-heart fa-lg`}
        style={{ color: isFavorute ? '#e74c3c' : '#ccc', cursor: 'pointer' }}
      ></i>
    </button>
  );
};

export default HeartIcon;
