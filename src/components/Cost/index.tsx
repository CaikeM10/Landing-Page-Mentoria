import styles from "./styles.module.scss";

const Cost = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src="/thinArrow.svg" />
          </div>
          <div className={styles.text}>
            <h2>Realizar orçamento</h2>
            <h5>
              Solicite um orçamento para ter seu próprio site feito pelo rei.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cost;
