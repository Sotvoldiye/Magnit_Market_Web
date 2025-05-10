import React, { useState } from 'react';

const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
<i
  className={` ${isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
  onClick={toggleLike}
  style={{ color: isLiked ? 'rgb(228, 83, 83)' : 'black', cursor: 'pointer' }}
></i>


  );
};

export default HeartIcon;
