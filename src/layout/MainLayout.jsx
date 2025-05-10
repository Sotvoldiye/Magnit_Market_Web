import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import style from './mainLayout.module.css'
function MainLayout() {
  return (
    <section className={style.section}>
        <main className={style.main}> 
            <Outlet/>
        </main>
        <Footer/>
    </section>
  )
}

export default MainLayout