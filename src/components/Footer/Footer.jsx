import React from 'react'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.css'
import { RiMenuSearchLine } from 'react-icons/ri'
function Footer() {
  return (
    <div className={style.footerCont}>

      <NavLink className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink} to='/'><i className="fa-solid fa-shop"></i>Shop</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}  to='/maxsulot-turi'><RiMenuSearchLine />Explore</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}  to='/savatcha'><IoCartOutline />Cart</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink} to='/ajratilgn_maxulotlar' ><FaRegHeart />Favourite</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink} to='/account' ><FaRegUser />Account</NavLink>
    </div>
  )
}

export default Footer