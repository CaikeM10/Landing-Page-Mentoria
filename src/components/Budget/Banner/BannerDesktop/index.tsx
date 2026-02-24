import styles from "./styles.module.scss";

const BannerDesktop = () => {
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* LADO ESQUERDO — TEXTO */}
        <div className={styles.leftSide}>
          <button className={styles.badge}>• Saiba mais abaixo •</button>

          <h1 className={styles.title}>
            Treinamento
            <span>Consultório Sustentável</span>
          </h1>

          <p className={styles.description}>
            Treinamento estratégico para profissionais da saúde que já vivem de
            clinicar e querem crescer com organização, clareza e posicionamento
            estruturado.
          </p>

          <p className={`${styles.description} ${styles.middleHighlight}`}>
            Profissional da saúde, se sua agenda está instável e sua clínica
            ainda funciona no improviso, o problema não é falta de demanda. É
            falta de estrutura estratégica.
          </p>

          <p className={styles.description}>
            Agora é hora de organizar seu plano de crescimento e transformar sua
            prática em um{" "}
            <span className={`${styles.middleHighlight} ${styles.finalStrong}`}>
              Consultório Sustentável para viver sua expansão consciente.
            </span>
          </p>

          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            Quero meu consultório sustentável
          </button>
        </div>

        {/* LADO DIREITO — IMAGEM */}
        <div className={styles.rightSide}>
          <img
            src="/imagemnovainiciodesktop.webp"
            alt="Íria Sabóia"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerDesktop;
