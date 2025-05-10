import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Slider.module.css'
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider className={style.slider} {...settings}>
        <div className={style.slider_item}>
          <img className={style.item_img} src="/images/logo.png" alt="Logo" />
          <h1 className={style.item_title} >Tez orada ishga tushamiz</h1>
        </div>
        <div><h3>2</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
