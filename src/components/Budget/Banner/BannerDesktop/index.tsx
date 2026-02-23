import styles from "./styles.module.scss";

// Placeholder para os Ícones alinhados ao estilo visual
const IconVideo = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);
const IconCheck = ({ className }: { className: string }) => (
  <i className={className}></i>
);
const IconCalendar = ({ className }: { className: string }) => (
  <i className={className}>📅</i>
);

const BannerDesktop = () => {
  // 🚀 Redirecionamento direto para o Checkout da Hubla
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.gridBackground}>
            {/* Badge de Destaque */}
            <button className={styles.orcamento}>• Saiba mais abaixo! •</button>

            <h1 className={styles.titleLine}>
              Treinamento
              <br />
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
              Se sua agenda está cheia, mas sua clínica ainda funciona no
              improviso, o problema não é falta de demanda. É falta de estrutura
              estratégica.
            </p>

            {/* 🚀 BOTÃO CTA COM ESTILO GOLD */}
            <button className={styles.button} onClick={handlePurchaseRedirect}>
              Quero garantir meu acesso agora
            </button>
          </div>
        </div>

        <div className={styles.rightSide}>
          {/* Imagem da Mentora - Estilo sobreposto conforme o layout Desktop */}
          <div className={styles.imageWrapper}>
            <img
              src="/Iria_DesktopMarrom.webp"
              alt="Íria Sabóia"
              className={styles.mentoraImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesktop;
