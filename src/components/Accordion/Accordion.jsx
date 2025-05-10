import { useState } from "react";
import styles from "./acordion.module.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import CommentCard from "../Coment/Coment";
import { NavLink } from "react-router-dom";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Bo'limni faollashtirish va yopish
  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Faol bo'limni yopish, boshqa bo'limni ochish
  };
console.log(data)
  return (
    <div className={styles.accordion}>
      {/* Asosiy bo'lim */}
      <div className={styles.accordionItem}>
        <button
          className={`${styles.accordionHeader} ${
            activeIndex === 0 ? styles.active : ""
          }`}
          onClick={() => toggleSection(0)} // 0-indeksli bo'limni ochish
        >
          {data.title}
          <span className={styles.icon}>
            {activeIndex === 0 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </button>
        <div
          className={`${styles.accordionContent} ${
            activeIndex === 0 ? styles.open : ""
          }`}
        >
          <p>{data.description}</p>
        </div>
      </div>

      <div className={styles.accordionItem}>
        <button
          className={`${styles.accordionHeader} ${
            activeIndex === 1 ? styles.active : ""
          }`}
          onClick={() => toggleSection(1)} // 1-indeksli bo'limni ochish
        >
          Maxsulot haqida fikrlar
        
          <span className={styles.icon}>
          <NavLink to='/comentlar' state={{ comments: data.reviews }} className={styles.allComent}
          >komentlar</NavLink>
            {activeIndex === 1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </button>
        <div
          className={`${styles.accordionContent} ${
            activeIndex === 1 ? styles.open : ""
          }`}
        >
          {data.reviews && data.reviews.slice(0, 2).map((com)=>(
                        <div key={Math.random()}>
                            <CommentCard comment={com}/>
                        </div>
          )
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
