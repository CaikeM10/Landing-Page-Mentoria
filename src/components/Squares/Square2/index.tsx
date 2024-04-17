import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./styles.module.scss";

const Squares2 = () => {
  const animationVariants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: -50 },
  };

  return (
    <>
      <InView threshold={0.5} triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className={styles.container}
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.texts}>
                  <div className={styles.top}>
                    <h4>Módulo 2</h4>
                  </div>
                  <div className={styles.title}>
                    <h3>Wordpress</h3>
                  </div>
                  <div className={styles.body}>
                    <h5>
                      O WordPress é uma plataforma incrível para criação de
                      websites, permitindo liberdade criativa com facilidade de
                      uso. Oferece uma infinidade de plugins para ampliar
                      funcionalidades, além de ser otimizado para SEO.
                    </h5>
                  </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.bottom}>
                  <h4>
                    Preço: <span>R$719,00</span>
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </>
  );
};

export default Squares2;
