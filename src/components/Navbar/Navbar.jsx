import React, { useState } from "react";
import style from './Navbar.module.css'
import { useGetAllProductsQuery } from "../../lib/api/productApi";
import SearchResultList from "../SearchResultList.jsx/SearchREsultLIst";
function Navbar({searchTerm, setSearchTerm, filteredData}) {

    const { data, isLoading, error } = useGetAllProductsQuery();

    


  return (
<div>
  
<form style={{padding:'0', paddingTop:'20px'}}>
        <div className={style.inputContainer}>
        <input  onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
       type="text" placeholder="Search Store"/>
        <i className="fa-solid fa-magnifying-glass fa-lg" style={{color:'rgb(228, 83, 83)'}} ></i>
        </div>
      </form>

</div>
  );
}

export default Navbar;
