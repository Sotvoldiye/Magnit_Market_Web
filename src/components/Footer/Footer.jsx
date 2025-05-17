import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import { RiMenuSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
function Footer() {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  
  const favoruteItems = useSelector((state) => state.favorute.items);
  console.log(favoruteItems);
  
  return (
    <div className={style.footerCont}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.navlink} ${style.active}` : style.navlink
        }
        to="/"
      >
        <i className="fa-solid fa-shop"></i>Shop
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.navlink} ${style.active}` : style.navlink
        }
        to="/maxsulot-turi"
      >
        <RiMenuSearchLine />
        Explore
      </NavLink>
      <NavLink
        to="/savatcha"
        className={({ isActive }) =>
          `${style.navlink} ${
            isActive ? style.active : ""
          } indicator tab tab-active`
        }
      >
       {cartItems.length > 0 && <span className="indicator-item badge ">
          {cartItems.length}
        </span>}
        <i className="fa-solid fa-shopping-cart mr-2"></i> {/* Ikonka */}
        Cart
      </NavLink>

      <NavLink
         to="/ajratilgn_maxulotlar"
        className={({ isActive }) =>
          `${style.navlink} ${
            isActive ? style.active : ""
          } indicator tab tab-active`
        }
      >
      {favoruteItems.length > 0 &&  <span className="indicator-item badge ">
          {favoruteItems.length}
        </span>}
        <i className="fa-solid fa-shopping-cart mr-2"></i> {/* Ikonka */}
        Favoruite
      </NavLink>


      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.navlink} ${style.active}` : style.navlink
        }
        to="/account"
      >
        <FaRegUser />
        Account
      </NavLink>
    </div>
  );
}

//  to="/ajratilgn_maxulotlar"
export default Footer;
