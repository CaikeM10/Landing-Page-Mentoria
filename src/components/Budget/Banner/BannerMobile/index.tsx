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
          Treinamento estratégico para profissionais da saúde que já vivem de
          clinicar e querem crescer com organização, clareza e posicionamento
          estruturado.
        </p>

        <div className={styles.eventInfo}>
          <p className={styles.normalText}>
            Profissional da saúde, se sua agenda está instável e sua clínica
            ainda funciona no improviso, o problema não é falta de demanda. É
            falta de estrutura estratégica.
          </p>
        </div>

        <p className={styles.lightInfo}>
          Agora é hora de organizar seu plano de crescimento e transformar sua
          prática em um Consultório Sustentável para viver sua expansão
          consciente.
        </p>

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
