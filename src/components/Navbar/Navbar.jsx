import React from "react";
import style from './Navbar.module.css'
function Navbar() {
  return (
    <div className={style.container}>
     <div className={style.Navbar}>
      <img src="/images/logo.png" height={'30px'} width={'150px'} alt="" />
     <h3>
        <i className="fa-solid fa-location-dot"></i> Farg'ona
      </h3>
     </div>
      <form action="">
        <div className={style.inputContainer}>
        <input type="text" placeholder="Search Store"/>
        <i className="fa-solid fa-magnifying-glass fa-lg" style={{color:'rgb(228, 83, 83)'}} ></i>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
