import React, { useState } from "react";
import "./home.css";
import { useGetAllProductsQuery } from "../../lib/api/productApi";
import style from "../../components/Navbar/Navbar.module.css";
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
  const filteredData = data.products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(data);
  return (
    <div className="home_container">
      <div className={style.Navbar}>
        <img src="/images/logo.png" height={"30px"} width={"150px"} alt="" />
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
        <SearchResultList data={data} searchTerm={searchTerm} />{" "}
      </div>
    </div>
  );
}

export default Home;
