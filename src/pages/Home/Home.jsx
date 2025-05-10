import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Pagination uchun
import { Pagination } from "swiper/modules"; // Pagination moduli
import "./home.css";
import { useGetAllProductsQuery } from "../../lib/api/productApi";
import Products from "../Products/Products";
import style from '../../components/Navbar/Navbar.module.css'
import Navbar from "../../components/Navbar/Navbar";
import SearchResultList from "../../components/SearchResultList.jsx/SearchREsultLIst";
import SimpleSlider from "../../components/Slider/Slider";
function Home() {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  if (error) {
    return (
      <div className="w-full text-center text-3xl font-bold text-red-500 opacity-90 py-10">
        <i className="fa fa-bug"></i> Somethning went wrong, Please try
      </div>
    );
  }
  if (isLoading || !data) {
    return (
      <div className="w-full py-10 text-center text-3xl font-bold opacity-90">
        <i className="fa fa-circle-notch fa-spin"></i>
      </div>
    );
  }
  const filteredData = data.products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(data);
  return (
    <div className="home_container">
           <div className={style.Navbar}>
            <img src="/images/logo.png" height={'30px'} width={'150px'} alt="" />
           <h3>
              <i className="fa-solid fa-location-dot"></i> Farg'ona
            </h3>
           </div>
                   <Navbar  searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredData={filteredData} />           
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }} // Pastdagi nuqtalar
          modules={[Pagination]}
          style={{ width: "100%", height: "114px" }} // Slayd balandligi
        >
          <SwiperSlide style={{ width: "100%", height: "114px" }}>
            <div className="swiperSlideContainer">
              <img
                width={"80%"}
                height={"50%"}
                src="./images/logo.png"
                alt=""
              />
              <div className="swiperSlideContainer">
                Magnit tez kunda ishga tushamiz
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <img
                width={"80%"}
                height={"50%"}
                src="./images/logo.png"
                alt=""
              />
              <div className="swiperSlideContainer">
                Magnit tez kunda ishga tushamiz
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlideContainer">
              <img
                width={"80%"}
                height={"50%"}
                src="./images/logo.png"
                alt=""
              />
              <div className="swiperSlideContainer">
                Magnit tez kunda ishga tushamiz
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      <SimpleSlider/>
      </div>
      <div>
      <SearchResultList data={data} searchTerm={searchTerm}/>      </div>
    </div>
  );
}

export default Home;
