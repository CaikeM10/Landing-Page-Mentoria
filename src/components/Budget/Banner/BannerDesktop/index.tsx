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
              O passo a passo para estruturar um plano de crescimento
              sustentável com diversificação de serviços no seu consultório.
            </p>

            {/* BLOCO DE INFORMAÇÕES - Estilo Checklist */}
            <div className={styles.eventInfo}>
              <div className={styles.eventDetail}>
                <IconVideo className={styles.icon} />
                <span>Acesso imediato ao material gravado</span>
              </div>

              <div className={styles.eventDetail}>
                <IconCalendar className={styles.icon} />
                <div className={styles.dateBlock}>
                  <strong>Aula prática ao vivo: 31/01/26</strong>
                  <small>Horário: 09:00h às 12:00h</small>
                </div>
              </div>
            </div>

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
