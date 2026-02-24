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
            Treinamento estratégico para profissionais da saúde que querem
            crescer com organização, clareza de posicionamento e qualidade.
          </p>

          <p className={styles.description}>
            Profissional da Saúde, você já está crescendo na clínica. Agora
            precisa estruturar esse crescimento para seguir crescendo com
            qualidade.
          </p>

          <p className={styles.description}>
            Se sua agenda está cheia, mas a clínica ainda funciona no improviso,
            o problema não é demanda.{" "}
            <span className={styles.highlightStrong}>
              É falta de estrutura estratégica.
            </span>
          </p>

          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            Quero garantir meu acesso agora
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
