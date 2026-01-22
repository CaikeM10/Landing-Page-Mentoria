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
          O passo a passo para implementar um novo projeto profissional com
          segurança.
        </p>

        {/* SEGUNDA FRASE - LETRA NORMAL */}
        <div className={styles.eventInfo}>
          <p className={styles.normalText}>
            Um treinamento prático para profissionais da saúde, baseado em
            experiência real de clínica, posicionamento e construção de modelos
            de negócio sustentáveis.
          </p>
        </div>

        {/* TERCEIRA FRASE - LEVE E ANTES DO BOTÃO */}
        <p className={styles.lightInfo}>
          • Aulas gravadas + Mentoria Voares online e ao vivo
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
