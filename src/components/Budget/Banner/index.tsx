import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.titleBanner}>
          <div className={styles.gridBackground}>
            <button className={styles.orcamento}>• Orçamento Grátis</button>
            <h1>Crie seu site ideal e veja seu negócio crescer online.</h1>
            <img src="/line.svg" alt="line" />

            <p>
              Um site profissional, rápido e otimizado para atrair mais clientes
              e aumentar suas vendas.
            </p>
            <button className={styles.button}>FAZER ORÇAMENTO GRATUITO</button>
          </div>
        </div>
        <div className={styles.containerText}>
          <h4>LANDING PAGE INSTITUCIONAL LOJA ONLINE</h4>
        </div>
      </section>
    </>
  );
};

export default Banner;
