import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import style from "./SplashScreen.module.css";

const rows = 12;
const cols = 12;

const SplashScreen = () => {
  const containerRef = useRef(null);
  const [showTiles, setShowTiles] = useState(false);

  useEffect(() => {
    // Boshlanishdan 1.5s o'tgach, to‘liq rasm yo‘qolib, tile'lar paydo bo'ladi
    const timeout = setTimeout(() => {
      setShowTiles(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showTiles) return;

    const tiles = containerRef.current.querySelectorAll(`.${style.tile}`);
    const tl = gsap.timeline({
      onComplete: () => {
        containerRef.current.style.display = "none";
      },
    });

    tl.fromTo(
      tiles,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0,
        stagger: {
          grid: [rows, cols],
          from: "end",
          amount: 1,
        },
        ease: "power2.inOut",
        duration: 1,
      }
    );

    return () => tl.kill();
  }, [showTiles]);

  const tiles = [];

  if (showTiles) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        tiles.push(
          <div
            key={`${row}-${col}`}
            className={style.tile}
            style={{
              backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
            }}
          />
        );
      }
    }
  }

  return (
    <div ref={containerRef} className={style.splash_container}>
      {!showTiles && (
        <img src="/images/logo.jpg" alt="Logo" className={style.full_logo} />
      )}
      {showTiles && <div className={style.grid}>{tiles}</div>}
    </div>
  );
};

export default SplashScreen;
