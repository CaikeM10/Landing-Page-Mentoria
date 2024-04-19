import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { default as Squares1 } from "../Squares/Square1";
import Squares2 from "../Squares/Square2";
import Squares3 from "../Squares/Square3";
import Squares4 from "../Squares/Square4";
import Squares5 from "../Squares/Square5";
import Squares6 from "../Squares/Square6";
import Squares7 from "../Squares/Square7";
import styles from "./styles.module.scss";

const Modulos = () => {
  const { scrollYProgress } = useViewportScroll();
  const [isSpecificPointReached, setIsSpecificPointReached] = useState(false);
  const [progressThreshold, setProgressThreshold] = useState(0.6);

  useEffect(() => {
    const adjustThresholdForDevice = () => {
      const isMobile = window.innerWidth <= 768;
      setProgressThreshold(isMobile ? 0.6 : 0.7);
    };

    adjustThresholdForDevice();
    window.addEventListener("resize", adjustThresholdForDevice);

    return () => {
      window.removeEventListener("resize", adjustThresholdForDevice);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      const progress = scrollYProgress.get();
      setIsSpecificPointReached(progress >= progressThreshold);
    };

    const unsubscribe = scrollYProgress.onChange(checkScroll);
    return () => unsubscribe();
  }, [scrollYProgress, progressThreshold]);

  const backgroundColor = isSpecificPointReached ? "#010425" : "white";
  const color = isSpecificPointReached ? "white" : "black";

  return (
    <motion.div className={styles.container} style={{ backgroundColor }}>
      <ScrollAnimation animateIn="fadeIn">
        <section className={styles.container} style={{ color }}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>
                <span> MÓDULOS EXCLUSIVOS</span>
              </h2>
            </div>
            <div className={styles.row}>
              <Squares1 />
              <Squares2 />
            </div>
            <div className={styles.row}>
              <Squares3 />
              <Squares4 />
            </div>
            <div className={styles.row}>
              <Squares5 />
              <Squares6 />
              <Squares7 />
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </motion.div>
  );
};

export default Modulos;
