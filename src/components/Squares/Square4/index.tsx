import styles from "./styles.module.scss";

const Squares4 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.texts}>
            <div className={styles.top}>
              <h4>Módulo 4</h4>
            </div>
            <div className={styles.title}>
              <h3>Programação do zero ao pro</h3>
            </div>
            <div className={styles.body}>
              <h5>
                Aprenda conceitos fundamentais e avançados de programação, com
                técnicas práticas para construir projetos sólidos. Com nosso
                curso, você terá as habilidades necessárias para se destacar no
                mundo da tecnologia!
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
      </div>
    </>
  );
};

export default Squares4;
