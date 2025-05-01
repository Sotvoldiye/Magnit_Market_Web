import React from 'react'
import style from './Input.module.css'
function Input({name, type, label}) {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input className={style.input} id={name} type={type} name={name}  />
    </div>
  )
}

export default Input