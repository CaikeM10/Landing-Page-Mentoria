import styles from "./styles.module.scss";

const BannerMobile = () => {
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>
          <span className={styles.trainingText}>Treinamento</span>
          <br />
          Consultório <span className={styles.goldText}>Sustentável</span>
        </h1>

        <p className={styles.description}>
          Estruture o posicionamento do seu consultório e viva de clinicar com
          crescimento sustentável.
        </p>

        <div className={styles.eventInfo}>
          <p className={styles.normalText}>
            Treinamento prático e estratégico para profissionais da saúde que já
            vivem de clinicar e querem consolidar organização, estabilidade e
            autoridade no mercado.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            Quero meu consultório sustentável
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
