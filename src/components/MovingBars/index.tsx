import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const MovingBars = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = document.body.offsetHeight - window.innerHeight;
      const scrollProgress = window.scrollY / windowHeight;
      const factor = 2;
      setScrollPercentage((1 - scrollProgress) * 100 * factor - 50 * factor);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => window.removeEventListener("scroll", updateScrollPercentage);
  }, []);

  return (
    <>
      <div className={styles.movingBars}>
        <div className={styles.topBar}>
          <div
            className={styles.topBarContent}
            style={{ transform: `translateX(${scrollPercentage - 100}%)` }}
          >
            <React.Fragment key="0">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="1">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="2">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="3">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="4">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="5">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="6">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="7">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="8">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="9">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="10">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="11">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="12">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="13">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="14">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="15">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="16">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div
            className={styles.bottomBarContent}
            style={{ transform: `translateX(${scrollPercentage - 100}%)` }}
          >
            <React.Fragment key="0">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="1">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="2">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="3">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="4">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="5">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="6">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="7">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="8">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="9">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="10">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="11">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="12">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
            <React.Fragment key="13">
              <img src="/diamond.svg" />
              <span>APRENDA COM O REI</span>
            </React.Fragment>
            <React.Fragment key="14">
              <img src="/diamond.svg" />
              <span>COMPRA SEGURA</span>
            </React.Fragment>
            <React.Fragment key="15">
              <img src="/diamond.svg" />
              <span>BONUS EXCLUSIVOS</span>
            </React.Fragment>
            <React.Fragment key="16">
              <img src="/diamond.svg" />
              <span>ACESSO VITALÍCIO</span>
            </React.Fragment>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingBars;
