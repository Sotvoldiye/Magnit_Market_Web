import React from "react";
import style from "./Tolov.module.css";

function Tolov({jami, setTolov, tolov}) {
  console.log(jami);
  return (
    <div className={style.modal}>
      <button onClick={()=>setTolov(false)} className={style.closeButton}>
        <i className="fa fa-close"></i>
      </button>
      <div>
        <h2 className={style.eslatma}><span className={style.eslatmaspan}>Eslatma:</span> Hozirda faqat Farg'ona tumanida yetqazib berish xizmati mavjud </h2>
        <p>Jammi summa: {jami.jami} so'm</p>
        <h2>Qaysi to'lov turini tanlaysiz</h2>
        <div className={style.button}>
          <button className={style.button_button}>To'lov qilish</button>
          <button onClick={()=> setTolov(false)} className={style.button_button}>Bekor qilish</button>
        </div>
      </div>
    </div>
  );
}

export default Tolov;
