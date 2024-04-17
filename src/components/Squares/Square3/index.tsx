import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";

const Squares3 = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <motion.div
        ref={ref}
        className={styles.container}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate when the element is in view
      >
        <div className={styles.content}>
          <div className={styles.texts}>
            <div className={styles.top}>
              <h4>Módulo 3</h4>
            </div>
            <div className={styles.title}>
              <h3>Estratégias de venda</h3>
            </div>
            <div className={styles.body}>
              <h5>
                Potencialize suas vendas! Aprenda a conectar-se com clientes,
                criar ofertas atrativas e fechar negócios de forma eficiente.
                Transforme possibilidades em lucros conosco e destaque-se no
                mundo das vendas!
              </h5>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.bottom}>
            <h4>
              Preço: <span>R$319,00</span>
            </h4>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Squares3;
