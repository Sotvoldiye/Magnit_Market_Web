import React from 'react'
import style from './Tolov.module.css'

function Tolov(jami) {
  console.log(jami)
  return (
    <div className={style.modal}>
        <h1>Buyurtman berish</h1>
        <p>Jammi summa: {jami.jami} so'm</p>
        <h2>Qaysi to'lov turini tanlaysiz</h2>
    <div className={style.button}>
    <button className={style.button_button} >Borib to'lash</button>
    <button className={style.button_button} >Online To'lov</button>
    </div>
    </div>
  )
}

export default Tolov