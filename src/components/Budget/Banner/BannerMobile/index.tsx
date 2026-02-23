import styles from "./styles.module.scss";

const BannerMobile = () => {
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>
          Treinamento <br />
          Consultório <span className={styles.goldText}>Sustentável</span>
        </h1>

        <p className={styles.description}>
          Treinamento estratégico para profissionais da saúde que querem crescer
          com organização, clareza de posicionamento e qualidade.
        </p>

        <div className={styles.eventInfo}>
          <p className={styles.normalText}>
            Profissional da Saúde, você já está crescendo na clínica. Agora
            precisa estruturar esse crescimento para seguir crescendo com
            qualidade.
          </p>
        </div>

        <p className={styles.lightInfo}>
          Se sua agenda está cheia, mas sua clínica ainda funciona no improviso,
          o problema não é falta de demanda. É falta de estrutura estratégica.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            Quero garantir meu acesso agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
