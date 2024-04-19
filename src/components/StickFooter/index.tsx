import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const StickFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo2.svg" />
        </div>
        <div className={styles.button}>
          <button>
            <p>ME INSCREVER</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickFooter;
