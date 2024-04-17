import styles from "./styles.module.scss";

const Squares7 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.texts}>
            <div className={styles.top}>
              <h4>Módulo 7</h4>
            </div>
            <div className={styles.title}>
              <h3>NextJs</h3>
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
      </div>
    </>
  );
};

export default Squares7;
