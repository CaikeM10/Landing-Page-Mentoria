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
              Treinamento <br />
              <span>Consultório Sustentável</span>
            </h1>

            <p className={styles.description}>
              Crie um plano de crescimento com diversificação de serviços para
              aumentar seu faturamento sem sobrecarregar a agenda de
              atendimentos.
            </p>
            <p className={styles.description}>
              Um treinamento prático para profissionais da saúde, baseado em
              experiência real de clínica, posicionamento e construção de
              modelos de negócio sustentáveis.
            </p>

            {/* 🚀 BOTÃO CTA COM ESTILO GOLD */}
            <button className={styles.button} onClick={handlePurchaseRedirect}>
              QUERO UM CONSULTÓRIO SUSTENTÁVEL!
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
