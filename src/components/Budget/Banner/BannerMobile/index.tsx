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

        {/* PRIMEIRA FRASE - FONTE ESTILIZADA (PLAYFAIR) */}
        <p className={styles.description}>
          Crie um plano de crescimento com diversificação de serviços para
          aumentar seu faturamento sem sobrecarregar a agenda de atendimentos.
        </p>

        {/* SEGUNDA FRASE - LETRA NORMAL */}
        <div className={styles.eventInfo}>
          <p className={styles.normalText}>
            Um treinamento prático para profissionais da saúde, baseado em
            experiência real de clínica, posicionamento e construção de modelos
            de negócio sustentáveis.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            Quero um consultório sustentável
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
