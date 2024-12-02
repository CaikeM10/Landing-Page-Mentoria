import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleBanner}>
            <button>• Orçamento Grátis</button>
            <h1>Crie seu site ideal e veja seu negócio crescer online.</h1>
            <img src="/line.svg" alt="line" />
            <p>
              Um site profissional, rápido e otimizado para atrair mais clientes
              e aumentar suas vendas.
            </p>
            <button className={styles.button}>FAZER ORÇAMENTO GRATUITO</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
