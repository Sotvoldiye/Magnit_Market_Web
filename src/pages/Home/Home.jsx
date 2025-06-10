import React, { useEffect, useState } from "react";
import "./home.css";
import { useGetAllProductsQuery } from "../../lib/api/productApi";
import style from "../../components/Navbar/Navbar.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchResultList from "../../components/SearchResultList.jsx/SearchREsultLIst";
import SimpleSlider from "../../components/Slider/Slider";
import Loading from "../../components/Loading/Loading";
import { Toaster } from "react-hot-toast";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
function Home() {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");


  const filteredData = data?.products?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="w-full text-center text-3xl font-bold text-red-500 opacity-90 py-10">
        <i className="fa fa-bug"></i> Something went wrong, Please try
      </div>
    );
  }



  return (
      <div className="home_container">
        <div className={style.Navbar}>
          <p>
            <span className="text-green-600 text-[20px]">Ixlos</span>
            <s>Market</s>
          </p>
          <h3>
            <i className="fa-solid fa-location-dot"></i> Farg'ona
          </h3>
        </div>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredData={filteredData}
        />
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <SimpleSlider />
        </div>
        <div>
          <SearchResultList data={data} searchTerm={searchTerm} />
        </div>
      </div>
  );
}


export default Home
